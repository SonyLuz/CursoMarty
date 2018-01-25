using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiSony.Models
{
    public class Pessoa
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }

        public Pessoa(string nome, string email, string telefone)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Email = email;
            Telefone = telefone;
        }

        public static List<Pessoa> ListaPessoa { get; set; }

        public static bool AddPessoa(Pessoa pessoa)
        {
            ListaPessoa.Add(pessoa);
            return true;
        }

        public static bool EditarPessoa(Guid id, Pessoa pessoa)
        {
            var newPessoa = pessoa;
            RemoverPessoa(id);
            AddPessoa(newPessoa);
            return true;
        }

        public static bool RemoverPessoa(Guid id)
        {
            var pessoa = ListaPessoa;
            if(pessoa != null)
            {
                foreach(var p in pessoa)
                {
                    if(p.Id == id)
                    {
                        ListaPessoa.Remove(p);
                    }
                }
                return true;
            }
            else
            {
                return false;
            }
            
        }

        public static void Iniciar()
        {
            if(ListaPessoa.Count <= 0)
            {
                ListaPessoa = new List<Pessoa>();
                ListaPessoa.Add(new Pessoa("sony", "sony@sony.com", "41995942920"));
                ListaPessoa.Add(new Pessoa("sony2", "sony@sony.com2", "41995942920"));
                ListaPessoa.Add(new Pessoa("sony2", "sony@sony.com2", "41995942920"));
            }
            
        }

        public static List<Pessoa> RetornaListaPessoa()
        {
            return ListaPessoa;
        }

        public static Pessoa RetornaPessoaPorID(Guid id)
        {
            var pessoa = ListaPessoa.Select(p => p.Id.Equals(id));
            return (Pessoa)pessoa;
        }
    }
}