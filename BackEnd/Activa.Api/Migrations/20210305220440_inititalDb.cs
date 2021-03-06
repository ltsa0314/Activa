using Microsoft.EntityFrameworkCore.Migrations;

namespace Activa.Api.Migrations
{
    public partial class inititalDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PhotoFavorite",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Author = table.Column<string>(maxLength: 100, nullable: false),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PhotoFavorite", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PhotoFavorite");
        }
    }
}
