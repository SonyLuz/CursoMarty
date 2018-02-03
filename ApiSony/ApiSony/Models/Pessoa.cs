//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace ApiSony.Models
//{
//    public class Pessoa
//    {
//        public Guid Id { get; set; }
//        public string Nome { get; set; }
//        public string Email { get; set; }
//        public string Telefone { get; set; }
//        public static List<Pessoa> ListaPessoa { get; set; }

//        public Pessoa(string nome, string email, string telefone)
//        {
//            Id = Guid.NewGuid();
//            Nome = nome;
//            Email = email;
//            Telefone = telefone;
//        }
 
//        public static bool AddPessoa(Pessoa pessoa)
//        {
//            if(pessoa != null)
//            {
//                ListaPessoa.Add(pessoa);
//                return true;
//            }
//            else
//            {
//                return false;
//            }
            
//        }

//        public static bool EditarPessoa(Guid id, Pessoa pessoa)
//        {
//            var newPessoa = RetornaPessoaPorID(id);
//            if(newPessoa != null)
//            {
//                newPessoa.Nome = pessoa.Nome;
//                newPessoa.Email = pessoa.Email;
//                newPessoa.Telefone = pessoa.Telefone;
//                return true;
//            }
//            else
//            {
//                return false;
//            }
            
//        }

//        public static bool RemoverPessoa(Guid id)
//        {
//            var pessoa = ListaPessoa;
//            if(pessoa != null)
//            {
//                pessoa.Remove(RetornaPessoaPorID(id));
//                return true;
//            }
//            else
//            {
//                return false;
//            }
            
//        }

//        public static void Iniciar()
//        {
//            if(ListaPessoa == null || ListaPessoa.Count <= 0)
//            {
//                ListaPessoa = new List<Pessoa>();
//                ListaPessoa.Add(new Pessoa("sony", "sony@sony.com", "41995942920"));
//                ListaPessoa.Add(new Pessoa("sony2", "sony@sony.com2", "41995942920"));
//                ListaPessoa.Add(new Pessoa("sony3", "sony@sony.com3", "41995942920"));
//            }
            
//        }

//        public static List<Pessoa> RetornaListaPessoa()
//        {
//            return ListaPessoa;
//        }

//        public static Pessoa RetornaPessoaPorID(Guid id)
//        {
//            foreach( var p in ListaPessoa)
//            {
//                if (p.Id.Equals(id))
//                    return p;
//            }               
//            return null;
//        }
//    }
//}