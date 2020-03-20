CREATE PROCEDURE [dbo].[USP_InsertCategory]
	@CategoryName varchar(50)
AS
BEGIN
	DECLARE @Id INT;
	select @Id = (SELECT COUNT(*) FROM Category)+1
	INSERT INTO Category values( @Id , @CategoryName);
	SELECT MAX(CategoryId) from Category;
END
