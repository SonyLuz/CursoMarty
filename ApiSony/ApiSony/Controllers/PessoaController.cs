using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using ApiSony.BO.Banco;
using ApiSonyNegocio.NegocioPessoa;

namespace ApiSony.Controllers
{
    public class PessoaController : ApiController
    {

        #region Desativado
        // GET: api/Iniciar
        //[Route("api/Iniciar")]
        //[HttpGet]
        //public HttpResponseMessage GetIniciar()
        //{
        //    try
        //    {
        //        Pessoa.Iniciar();
        //        return Request.CreateResponse(HttpStatusCode.OK);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error no carregamento da lista!!!");

        //    }
        //}
        #endregion

        #region [GET]

        // GET: api/Pessoa
        public HttpResponseMessage Get()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, PessoaNegocio.ListarPessoa());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        // GET: api/Pessoa/5
        public HttpResponseMessage Get(Guid id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, PessoaNegocio.GetPessoaId(id));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }
        #endregion

        #region [POST]

        // POST: api/Pessoa
        public HttpResponseMessage Post([FromBody]Pessoa value)
        {
            try
            {
                bool result = PessoaNegocio.AddPessoa(value);
                if (result)
                    return Request.CreateResponse(HttpStatusCode.OK, "Cadastrado com sucesso!! Aew cuzão!");
                else
                    return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu ruim cuzão! Chama o Marty!!");

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu mto ruim cuzão! " + ex);

            }
        }

        #endregion

        #region [PUT]

        // PUT: api/Pessoa/5
        public HttpResponseMessage Put(Guid id, [FromBody]Pessoa value)
        {
            try
            {
                bool resultado = PessoaNegocio.EditarPessoa(id, value);
                if (resultado)
                    return Request.CreateResponse(HttpStatusCode.OK, "Atualizado!!! Aeww Cuzão!!");
                else
                    return Request.CreateResponse(HttpStatusCode.InternalServerError, "Vixe cuzão não alterou!!! Chama o Marty!!");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);

            }
        }

        #endregion

        #region [DELETE]

        // DELETE: api/Pessoa/5
        public HttpResponseMessage Delete(Guid id)
        {
            try
            {
                bool retorno = PessoaNegocio.RemoverPessoa(id);
                if (retorno)
                    return Request.CreateResponse(HttpStatusCode.OK, "Removido com sucesso. Aew Cuzão!!!");
                else
                    return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu ruim ao remover. Vixi Cuzão chama o Marty!!");

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Deu mto ruim " + ex);

            }
        }

        #endregion

    }
}
