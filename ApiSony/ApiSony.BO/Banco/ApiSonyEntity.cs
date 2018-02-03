namespace ApiSony.BO.Banco
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class ApiSonyEntity : DbContext
    {
        public ApiSonyEntity()
            : base("name=ApiSonyEntity")
        {
        }

        public virtual DbSet<Pessoa> Pessoa { get; set; }
        public virtual DbSet<Escolaridade> Escolaridade { get; set; }
        public virtual DbSet<Sexo> Sexo { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Nome)
                .IsUnicode(false);

            modelBuilder.Entity<Escolaridade>()
                .Property(e => e.Nivel).HasMaxLength(70);

            modelBuilder.Entity<Sexo>()
                .Property(s=>s.TipoSexo).HasMaxLength(10);
        }
    }
}
