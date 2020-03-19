CREATE PROCEDURE [dbo].[USP_UpdateProductDetails]
	@Id INT,
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
	DECLARE @SubCategoryId INT;
	set @SubCategoryId = (SELECT Id from SubCategory where Name = @SubCategoryName);
	UPDATE Product 
			set SubCategoryId = @SubCategoryId,
				Name = @Name,
				Description = @Description,
				Specification = @Specification,
				Options = @Options,
				Price = @Price,
				Brand =@Brand,
				IsActive = @IsActive,
				Quantity=@Quantity,
				ImageURL= @ImageURL
			WHERE Id = @Id;
			SELECT Id from Product where Id = @Id;
END