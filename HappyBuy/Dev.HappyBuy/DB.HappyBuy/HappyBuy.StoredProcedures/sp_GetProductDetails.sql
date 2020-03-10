CREATE PROCEDURE [dbo].[sp_GetProductDetails]
	@Name varchar(300)
AS
BEGIN
	IF((SELECT COUNT(*) FROM Category WHERE Categories LIKE '%'+@Name+'%') > 0)
		BEGIN
			select * from Product P join SubCategory SC on P.SubCategoryId = SC.Id 
			join Category C on SC.CategoryId = C.Id where C.Categories  LIKE '%'+@Name+'%';
		END
	ELSE IF((SELECT COUNT(*) FROM SubCategory WHERE Name LIKE '%'+@Name+'%')>0)
		BEGIN
		select * from Product P join SubCategory SC on 
		P.SubCategoryId = SC.Id where SC.Name LIKE '%'+@Name+'%';
		END
	ELSE IF((SELECT COUNT(*) FROM Product WHERE Name LIKE '%'+@Name+'%')>0)
		BEGIN
		select * from Product P where Name LIKE '%'+@Name+'%';
		END
END