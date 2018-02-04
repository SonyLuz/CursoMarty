namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class alterescolaridadesexoadd : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pessoa", "Id_Escolaridade", c => c.String(maxLength: 60));
            AddColumn("dbo.Pessoa", "Id_Sexo", c => c.String(maxLength: 10));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pessoa", "Id_Sexo");
            DropColumn("dbo.Pessoa", "Id_Escolaridade");
        }
    }
}
