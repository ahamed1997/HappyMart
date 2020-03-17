CREATE PROCEDURE [dbo].[USP_InsertProduct]	
	@SubCategoryName varchar(50),
	@Name varchar(100),
	@Description nvarchar(1000),
	@Specification nvarchar(MAX),
	@Options nvarchar(MAX),
	@Price DECIMAL(10,2),
	@Brand varchar(50),
	@IsActive int,
	@Quantity int,
	@ImageURL varchar(200)

AS
BEGIN
	DECLARE @Id INT,@SubCategoryId INT;
	set @Id = (SELECT COUNT(*) from Product)+1;
	set @SubCategoryId = (SELECT Id from SubCategory WHERE Name = @SubCategoryName);
	INSERT into Product values (@Id,@SubCategoryId,@Name,@Description,@Specification,@Options,@Price,@Brand,@IsActive,@Quantity,@ImageURL);
END


