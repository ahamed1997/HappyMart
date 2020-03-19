CREATE PROCEDURE [dbo].[USP_InsertProduct]	
	@SubCategoryId INT,
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
	DECLARE @Id INT;
	set @Id = (SELECT COUNT(*) from Product)+1;
	INSERT into Product values (@Id,@SubCategoryId,@Name,@Description,@Specification,@Options,@Price,@Brand,@IsActive,@Quantity,@ImageURL);
	select Max(Id) from Product;
END


