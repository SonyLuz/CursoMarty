namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddEmail : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pessoas", "Email", c => c.String(maxLength: 100));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pessoas", "Email");
        }
    }
}
