namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCampoTelefone : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pessoa", "Telefone", c => c.String(maxLength: 11));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pessoa", "Telefone");
        }
    }
}
