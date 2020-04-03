CREATE PROCEDURE [dbo].[USP_GetProductDetails]
	@ProductName varchar(100)
AS
BEGIN
	DECLARE @Count int;		
			SELECT 
				P.ProductId,
				P.ProductSubCategoryId,
				P.ProductName,
				P.ProductDescription,
				P.ProductSpecification,
				P.ProductOptions,
				P.ProductPrice,
				P.ProductBrand,
				P.ProductQuantity,
				P.ProductImageURL
			FROM Product P JOIN SubCategory SC ON SC.SubCategoryId = P.ProductSubCategoryId
			JOIN Category C on SC.SubCategoryCategoryId = C.CategoryId 
			WHERE 
			(
			C.CategoryName  LIKE '%'+@ProductName+'%' OR
			P.ProductName LIKE '%'+@ProductName+'%' OR
			SC.SubCategoryName LIKE '%'+@ProductName+'%')
END
