namespace ApiSony.BO.Banco
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Sexo")]
    public partial class Sexo
    {
        [Key]
        public int Id_Sexo { get; set; }

        [Column("TipoSexo")]
        [StringLength(10)]
        public string TipoSexo { get; set; }
    }
}
