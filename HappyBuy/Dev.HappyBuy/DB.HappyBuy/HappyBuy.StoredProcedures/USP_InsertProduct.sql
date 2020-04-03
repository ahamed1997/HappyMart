CREATE PROCEDURE [dbo].[USP_InsertProduct]	
	@ProductSubCategoryId INT,
	@ProductName varchar(100),
	@ProductDescription nvarchar(1000),
	@ProductSpecification nvarchar(MAX),
	@ProductOptions nvarchar(MAX),
	@ProductPrice DECIMAL(10,2),
	@ProductBrand varchar(50),
	@ProductIsActive bit,
	@ProductQuantity int,
	@ProductImageURL varchar(200)

AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT COUNT(*) from Product)+1;
	INSERT into Product values (@Id,@ProductSubCategoryId,@ProductName,@ProductDescription,@ProductSpecification,@ProductOptions,@ProductPrice,@ProductBrand,@ProductIsActive,@ProductQuantity,@ProductImageURL);
	select Max(ProductId) from Product;
END


