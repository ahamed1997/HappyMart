CREATE PROCEDURE [dbo].[USP_InsertSubCategory]
	@SubCategoryCategoryId INT,
	@SubCategoryName varchar(100)
AS
BEGIN
	DECLARE @Id INT,@Count INT;
	set @Id = (select COUNT(*) from SubCategory)+1;
	INSERT INTO SubCategory values( @Id , @SubCategoryCategoryId, @SubCategoryName);
	select Max(SubCategoryId) from SubCategory
END

