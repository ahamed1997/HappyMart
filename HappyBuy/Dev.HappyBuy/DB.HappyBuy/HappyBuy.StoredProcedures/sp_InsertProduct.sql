CREATE PROCEDURE [dbo].[sp_InsertProduct]
	@SubCategoryName varchar(50),
	@Name varchar(100),
	@Description varchar(500),
	@Specification varchar(600),
	@Options varchar(400),
	@Price nvarchar(50),
	@Brand varchar(50),
	@IsActive int,
	@ImageURL varchar(200)

AS
BEGIN
	declare @money money = @Price, @TempSubCategoryId varchar(30),@Id varchar(50),@Count int, @TempPrice nvarchar(50)
	set @TempSubCategoryId = (select Id from SubCategory where Name = @SubCategoryName)
	set @Count = (select count(*) from Product)+1;
	set @Id = 'P' + @TempSubCategoryId + 'SC' + (FORMAT(@Count,'00000'));
	set @TempPrice = (SELECT FORMAT ( @money,'C', 'ta-IN'));
	insert into Product values (@Id,@TempSubCategoryId,@Name,@Description,@Specification,@Options,@TempPrice,@Brand,@IsActive,@ImageURL);
END

