CREATE PROCEDURE [dbo].[USP_GetProductDetails]
	@Name varchar(100)
AS
BEGIN
	IF((SELECT COUNT(*) FROM Category WHERE Name LIKE '%'+@Name+'%') > 0)
		BEGIN
			SELECT 
				P.Id,
				P.Name,
				P.Description,
				P.Specification,
				P.Options,
				P.Price,
				P.Brand,
				P.Quantity,
				P.ImageURL
			FROM Product P JOIN SubCategory SC ON P.SubCategoryId = SC.Id 
			JOIN Category C on SC.CategoryId = C.Id WHERE C.Name  LIKE '%'+@Name+'%';
		END

	ELSE IF((SELECT COUNT(*) FROM SubCategory WHERE Name LIKE '%'+@Name+'%')>0)
		BEGIN
			SELECT 
				P.Id,
				P.Name,
				P.Description,
				P.Specification,
				P.Options,
				P.Price,
				P.Brand,
				P.Quantity,
				P.ImageURL
			FROM Product P JOIN SubCategory SC ON 
			P.SubCategoryId = SC.Id WHERE SC.Name LIKE '%'+@Name+'%';
		END

	ELSE IF((SELECT COUNT(*) FROM Product WHERE Name LIKE '%'+@Name+'%')>0)
		BEGIN
			SELECT 
				P.Id,
				P.Name,
				P.Description,
				P.Specification,
				P.Options,
				P.Price,
				P.Brand,
				P.Quantity,
				P.ImageURL
			FROM Product P WHERE Name LIKE '%'+@Name+'%';
		END
END
