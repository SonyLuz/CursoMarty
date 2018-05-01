namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlteracaoPessoa : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pessoa", "Cpf", c => c.String(maxLength: 11));
            AddColumn("dbo.Pessoa", "Cep", c => c.String(maxLength: 7));
            AddColumn("dbo.Pessoa", "Data_Nascimento", c => c.DateTime(nullable: false));
            AddColumn("dbo.Pessoa", "Rg", c => c.String(maxLength: 8));
            AddColumn("dbo.Pessoa", "Endereco", c => c.String(maxLength: 100));
            AddColumn("dbo.Pessoa", "Complemento_Endereco", c => c.String(maxLength: 10));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pessoa", "Complemento_Endereco");
            DropColumn("dbo.Pessoa", "Endereco");
            DropColumn("dbo.Pessoa", "Rg");
            DropColumn("dbo.Pessoa", "Data_Nascimento");
            DropColumn("dbo.Pessoa", "Cep");
            DropColumn("dbo.Pessoa", "Cpf");
        }
    }
}
