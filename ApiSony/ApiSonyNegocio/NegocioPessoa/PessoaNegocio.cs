using ApiSony.BO.Banco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiSonyNegocio.NegocioPessoa
{
    public class PessoaNegocio
    {
        /// <summary>
        /// Retorna todos os cadastros da base
        /// </summary>
        /// <returns></returns>
        public static List<Pessoa> ListarPessoa()
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    return context.Pessoa.ToList();
                }
            }
            catch (Exception ex)
            {
                throw;
            }            
        }

        /// <summary>
        /// Retorna pessoa por id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static Pessoa GetPessoaId(Guid id)
        {            
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    return context.Pessoa.Where(p => p.Id.Equals(id)).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        /// <summary>
        /// Add Pessoa na base
        /// </summary>
        /// <param name="pessoa"></param>
        /// <returns></returns>
        public static bool AddPessoa(Pessoa pessoa)
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    if (pessoa != null)
                    {
                        pessoa.Id = Guid.NewGuid();
                        context.Pessoa.Add(pessoa);
                        context.SaveChanges();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }                    
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        /// <summary>
        /// Editar Pessoa
        /// </summary>
        /// <param name="id"></param>
        /// <param name="pessoa"></param>
        /// <returns></returns>
        public static bool EditarPessoa(Guid id, Pessoa pessoa)
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    var newPessoa = GetPessoaId(id);
                    if (newPessoa != null)
                    {
                        newPessoa.Id = id;
                        newPessoa.Nome = pessoa.Nome;
                        newPessoa.Email = pessoa.Email;
                        newPessoa.Telefone = pessoa.Telefone;
                        newPessoa.Id_Sexo = pessoa.Id_Sexo;
                        newPessoa.Id_Escolaridade = pessoa.Id_Escolaridade;
                        
                        context.SaveChanges();

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        /// <summary>
        /// Remover Pessoa
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool RemoverPessoa(Guid id)
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    if (id != null)
                    {
                        context.Pessoa.Remove(context.Pessoa.Where(p => p.Id.Equals(id)).FirstOrDefault());
                        context.SaveChanges();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch(Exception ex)
            {
                return false;
            }
        }
    }
}
