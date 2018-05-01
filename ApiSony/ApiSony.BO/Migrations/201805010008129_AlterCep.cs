namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterCep : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Pessoa", "Cep", c => c.String(maxLength: 8));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Pessoa", "Cep", c => c.String(maxLength: 7));
        }
    }
}
