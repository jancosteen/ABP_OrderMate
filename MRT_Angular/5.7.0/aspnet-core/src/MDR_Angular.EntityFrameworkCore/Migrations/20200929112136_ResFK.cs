using Microsoft.EntityFrameworkCore.Migrations;

namespace MDR_Angular.Migrations
{
    public partial class ResFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RestaurantIdFk",
                table: "SocialMedia",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RestaurantIdFk",
                table: "SocialMedia");
        }
    }
}
