namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Altertipodado : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Pessoa", "Cpf", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("dbo.Pessoa", "Cep", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AlterColumn("dbo.Pessoa", "Rg", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Pessoa", "Rg", c => c.String(maxLength: 8));
            AlterColumn("dbo.Pessoa", "Cep", c => c.String(maxLength: 8));
            AlterColumn("dbo.Pessoa", "Cpf", c => c.String(maxLength: 11));
        }
    }
}
