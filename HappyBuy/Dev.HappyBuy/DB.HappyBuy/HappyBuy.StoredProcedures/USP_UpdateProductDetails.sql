CREATE PROCEDURE [dbo].[USP_UpdateProductDetails]
	@ProductId INT,
	@ProductSubCategoryName varchar(50),
	@ProductName varchar(100),
	@ProductDescription nvarchar(1000),
	@ProductSpecification nvarchar(MAX),
	@ProductOptions nvarchar(MAX),
	@ProductPrice DECIMAL(10,2),
	@ProductBrand varchar(50),
	@ProductIsActive int,
	@ProductQuantity int,
	@ProductImageURL varchar(200)
AS
BEGIN
	DECLARE @SubCategoryId INT;
	set @SubCategoryId = (SELECT SubCategoryId from SubCategory where SubCategoryName = @ProductSubCategoryName);
	UPDATE Product 
			set ProductSubCategoryId = @SubCategoryId,
				ProductName = @ProductName,
				ProductDescription = @ProductDescription,
				ProductSpecification = @ProductSpecification,
				ProductOptions = @ProductOptions,
				ProductPrice = @ProductPrice,
				ProductBrand = @ProductBrand,
				ProductIsActive = @ProductIsActive,
				ProductQuantity = @ProductQuantity,
				ProductImageURL= @ProductImageURL
			WHERE ProductId = @ProductId;
			SELECT ProductId from Product where ProductId = @ProductId;
END