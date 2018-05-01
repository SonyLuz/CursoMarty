using ApiSony.BO.Banco;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
        public static bool AddPessoa(Pessoa pessoa, out string msg)
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    if (pessoa != null)
                    {
                        bool validaCPF = BuscaCPF(pessoa.Cpf);
                        if(validaCPF)
                        {
                            msg = "CPF já Cadastrado!!!";
                            return false;
                        }
                            
                        pessoa.Id = Guid.NewGuid();
                        context.Pessoa.Add(pessoa);
                        context.SaveChanges();
                        msg = "Cadastrado com sucesso!! Aew cuzão!";
                        return true;
                    }
                    else
                    {
                        msg = "Deu ruim cuzão! Chama o Marty!!";
                        return false;
                    }
                }                    
            }
            catch (Exception ex)
            {
                msg = ex.Message + "Ligue pro Marty!!!";
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
                    Pessoa newPessoa = GetPessoaId(id);
                    if (newPessoa != null)
                    {
                        newPessoa.Id = id;
                        newPessoa.Nome = pessoa.Nome;
                        newPessoa.Email = pessoa.Email;
                        newPessoa.Telefone = pessoa.Telefone;
                        newPessoa.Id_Sexo = pessoa.Id_Sexo;
                        newPessoa.Id_Escolaridade = pessoa.Id_Escolaridade;
                        newPessoa.Cep = pessoa.Cep;
                        newPessoa.Endereco = pessoa.Endereco;
                        newPessoa.Data_Nascimento = pessoa.Data_Nascimento;
                        newPessoa.Cpf = pessoa.Cpf;
                        newPessoa.Complemento_Endereco = pessoa.Complemento_Endereco;
                        newPessoa.Rg = pessoa.Rg;

                        context.Entry(newPessoa).State = EntityState.Modified;
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

        public static string RetornaEscolaridade(string id)
        {
            using (var context = new ApiSonyEntity())
            {
                return context.Escolaridade.Where(e => e.Id_Escolaridade.ToString() == id).FirstOrDefault().Nivel;
            }
        }

        public static string RetornaSexo(string id)
        {
            using (var context = new ApiSonyEntity())
            {
                return context.Sexo.Where(s => s.Id_Sexo.ToString() == id).FirstOrDefault().TipoSexo;
            }
        }

        public static bool BuscaCPF(string cpf)
        {
            try
            {
                using (var context = new ApiSonyEntity())
                {
                    var pessoa = context.Pessoa.Where(p => p.Cpf.Equals(cpf)).FirstOrDefault();
                    if (pessoa != null)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
