CREATE PROCEDURE [dbo].[USP_GetSubCategories]
AS
BEGIN
		   Select C.CategoryId,C.CategoryName,S.SubCategoryId,S.SubCategoryName from SubCategory S join Category C on C.CategoryId = S.SubCategoryCategoryId
END