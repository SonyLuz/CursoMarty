namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class alterescolaridadesexo : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Pessoa", "Id_Escolaridade");
            DropColumn("dbo.Pessoa", "Id_Sexo");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Pessoa", "Id_Sexo", c => c.String(maxLength: 10));
            AddColumn("dbo.Pessoa", "Id_Escolaridade", c => c.String(maxLength: 100));
        }
    }
}
