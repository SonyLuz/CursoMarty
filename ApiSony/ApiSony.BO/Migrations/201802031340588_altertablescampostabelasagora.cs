namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class altertablescampostabelasagora : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pessoa", "Id_Escolaridade", c => c.Int(nullable: false));
            AddColumn("dbo.Pessoa", "Id_Sexo", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pessoa", "Id_Sexo");
            DropColumn("dbo.Pessoa", "Id_Escolaridade");
        }
    }
}
