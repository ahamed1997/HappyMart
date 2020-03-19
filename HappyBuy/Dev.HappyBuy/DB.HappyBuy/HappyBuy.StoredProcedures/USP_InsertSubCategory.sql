CREATE PROCEDURE [dbo].[USP_InsertSubCategory]
	@CategoryId INT,
	@Name varchar(100)
AS
BEGIN
	DECLARE @Id INT,@Count INT;
	set @Id = (select COUNT(*) from SubCategory)+1;
	INSERT INTO SubCategory values( @Id , @CategoryId, @Name);
	select Max(Id) from SubCategory
END

