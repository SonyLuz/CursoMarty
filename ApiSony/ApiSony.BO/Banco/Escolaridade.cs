namespace ApiSony.BO.Banco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Escolaridade")]
    public partial class Escolaridade
    {
        [Key]
        public int Id_Escolaridade { get; set; }

        [StringLength(70)]
        public string Nivel { get; set; }
    }
}
