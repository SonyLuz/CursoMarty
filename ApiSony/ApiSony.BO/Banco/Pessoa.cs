namespace ApiSony.BO.Banco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

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
    }
}
