CREATE PROCEDURE [dbo].[USP_GetProductDetails]
	@ProductName varchar(100)
AS
BEGIN
	IF((SELECT COUNT(*) FROM Category WHERE CategoryName LIKE '%'+@ProductName+'%') > 0)
		BEGIN
			SELECT 
				P.ProductId,
				P.ProductName,
				P.ProductDescription,
				P.ProductSpecification,
				P.ProductOptions,
				P.ProductPrice,
				P.ProductBrand,
				P.ProductQuantity,
				P.ProductImageURL
			FROM Product P JOIN SubCategory SC ON P.ProductSubCategoryId = SC.SubCategoryId 
			JOIN Category C on SC.SubCategoryId = C.CategoryId WHERE C.CategoryName  LIKE '%'+@ProductName+'%';
		END

	ELSE IF((SELECT COUNT(*) FROM SubCategory WHERE SubCategoryName LIKE '%'+@ProductName+'%')>0)
		BEGIN
			SELECT 
				P.ProductId,
				P.ProductName,
				P.ProductDescription,
				P.ProductSpecification,
				P.ProductOptions,
				P.ProductPrice,
				P.ProductBrand,
				P.ProductQuantity,
				P.ProductImageURL
			FROM Product P JOIN SubCategory SC ON 
			P.ProductSubCategoryId = SC.SubCategoryId WHERE SC.SubCategoryName LIKE '%'+@ProductName+'%';
		END

	ELSE IF((SELECT COUNT(*) FROM Product WHERE ProductName LIKE '%'+@ProductName+'%')>0)
		BEGIN
			SELECT 
				P.ProductId,
				P.ProductName,
				P.ProductDescription,
				P.ProductSpecification,
				P.ProductOptions,
				P.ProductPrice,
				P.ProductBrand,
				P.ProductQuantity,
				P.ProductImageURL
			FROM Product P WHERE ProductName LIKE '%'+@ProductName+'%';
		END
END
