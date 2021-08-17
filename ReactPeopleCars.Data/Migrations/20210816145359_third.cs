using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactPeopleCars.Data.Migrations
{
    public partial class third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_People_personId",
                table: "Cars");

            migrationBuilder.RenameColumn(
                name: "personId",
                table: "Cars",
                newName: "PersonId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_personId",
                table: "Cars",
                newName: "IX_Cars_PersonId");

            migrationBuilder.AlterColumn<int>(
                name: "PersonId",
                table: "Cars",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_People_PersonId",
                table: "Cars",
                column: "PersonId",
                principalTable: "People",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_People_PersonId",
                table: "Cars");

            migrationBuilder.RenameColumn(
                name: "PersonId",
                table: "Cars",
                newName: "personId");

            migrationBuilder.RenameIndex(
                name: "IX_Cars_PersonId",
                table: "Cars",
                newName: "IX_Cars_personId");

            migrationBuilder.AlterColumn<int>(
                name: "personId",
                table: "Cars",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_People_personId",
                table: "Cars",
                column: "personId",
                principalTable: "People",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
