namespace ApiSony.BO.Banco
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Pessoa")]
    public partial class Pessoa
    {
        public Guid Id { get; set; }

        [StringLength(100)]
        public string Nome { get; set; }

        [StringLength(100)]
        public string Email { get; set; }

        [StringLength(11)]
        public string Telefone { get; set; }

        [StringLength(60)]
        public string Id_Escolaridade { get; set; }

        [StringLength(10)]
        public string Id_Sexo { get; set; }

        public Decimal Cpf { get; set; }

        public Decimal Cep { get; set; }

        public DateTime Data_Nascimento { get; set; }

        public int Rg { get; set; }

        [StringLength(100)]
        public string Endereco { get; set; }

        [StringLength(10)]
        public string Complemento_Endereco { get; set; }
    }
}
