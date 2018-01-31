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

        public virtual DbSet<Pessoa> Pessoas { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pessoa>()
                .Property(e => e.Nome)
                .IsUnicode(false);
        }
    }
}
