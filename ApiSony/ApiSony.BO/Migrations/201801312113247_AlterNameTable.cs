namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterNameTable : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Pessoas", newName: "Pessoa");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Pessoa", newName: "Pessoas");
        }
    }
}
