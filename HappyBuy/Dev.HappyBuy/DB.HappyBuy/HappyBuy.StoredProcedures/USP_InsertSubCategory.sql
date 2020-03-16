CREATE PROCEDURE [dbo].[USP_InsertSubCategory]
	@CategoryName varchar(50),
	@Name varchar(100)
AS
BEGIN
	DECLARE @Id INT,@Count INT, @CategoryId INT;
	set @Id = (select COUNT(*) from SubCategory)+1;
	set @CategoryId = (select Id from Category WHERE Name = @CategoryName);
	INSERT INTO SubCategory values( @Id , @CategoryId, @Name);
END

