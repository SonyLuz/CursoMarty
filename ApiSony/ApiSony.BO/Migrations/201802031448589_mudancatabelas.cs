namespace ApiSony.BO.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mudancatabelas : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Escolaridade",
                c => new
                    {
                        Id_Escolaridade = c.Int(nullable: false, identity: true),
                        Nivel = c.String(maxLength: 70),
                    })
                .PrimaryKey(t => t.Id_Escolaridade);
            
            CreateTable(
                "dbo.Sexo",
                c => new
                    {
                        Id_Sexo = c.Int(nullable: false, identity: true),
                        TipoSexo = c.String(maxLength: 10),
                    })
                .PrimaryKey(t => t.Id_Sexo);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Sexo");
            DropTable("dbo.Escolaridade");
        }
    }
}
