CREATE PROCEDURE [dbo].[sp_InsertSubCategory]
	@CategoryName varchar(50),
	@Name varchar(100)
AS
BEGIN
	declare @Id varchar(30),@Count int, @TempCategoryId varchar(10);
	set @Count = (select count(*) from SubCategory)+1;
	set @TempCategoryId = (select Id from Category where Name = @CategoryName);
	set @Id = @TempCategoryId + 'SC' + (FORMAT(@Count,'00000'))
	INSERT INTO SubCategory values( @Id , @TempCategoryId, @Name);
END
