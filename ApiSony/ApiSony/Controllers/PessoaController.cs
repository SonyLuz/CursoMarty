using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ApiSony.Models;
using Newtonsoft.Json;

namespace ApiSony.Controllers
{
    public class PessoaController : ApiController
    {

        // GET: api/Iniciar
        [Route("api/Iniciar")]
        [HttpGet]
        public HttpResponseMessage GetIniciar()
        {
            try
            {
                Pessoa.Iniciar();
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // GET: api/Pessoa
        public HttpResponseMessage Get()
        {
            try
            {
                List<Pessoa> pessoas = Pessoa.RetornaListaPessoa();
                return Request.CreateResponse(HttpStatusCode.OK, Pessoa.RetornaListaPessoa());
            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // GET: api/Pessoa/5
        public HttpResponseMessage Get(Guid id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, Pessoa.RetornaPessoaPorID(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // POST: api/Pessoa
        public HttpResponseMessage Post([FromBody]Pessoa value)
        {
            try
            {
                Pessoa.AddPessoa(value);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // PUT: api/Pessoa/5
        public HttpResponseMessage Put(Guid id, [FromBody]Pessoa value)
        {
            try
            {
                Pessoa.EditarPessoa(id, value);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // DELETE: api/Pessoa/5
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                bool retorno = Pessoa.RemoverPessoa(id);
                if(retorno)
                    return Request.CreateResponse(HttpStatusCode.OK, "Removido com sucesso. Aew Cuzão!!!");
                else
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu ruim ao remover. Vixi Cuzão!!!");

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu mto ruim " + ex);

            }
        }
    }
}
