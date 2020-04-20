CREATE PROCEDURE [dbo].[USP_GetProductDetails]
	@ProductName varchar(100)
AS
BEGIN
		DECLARE @trimmedString varchar(50);		
	set @trimmedString =(RTRIM(LTRIM(@ProductName)));
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
			C.CategoryName  LIKE '%'+@trimmedString+'%' OR
			P.ProductName LIKE '%'+@trimmedString+'%' OR
			SC.SubCategoryName LIKE '%'+@trimmedString+'%'
			OR P.ProductBrand LIKE '%' +@trimmedString+'%')
END