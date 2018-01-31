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

        [StringLength(200)]
        public string Nome { get; set; }

        [StringLength(100)]
        public string Email { get; set; }
    }
}
