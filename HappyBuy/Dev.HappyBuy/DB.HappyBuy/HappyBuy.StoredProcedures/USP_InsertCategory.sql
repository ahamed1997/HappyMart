CREATE PROCEDURE [dbo].[USP_InsertCategory]
	@Name varchar(50)
AS
BEGIN
	DECLARE @Id INT;
	select @Id = (SELECT COUNT(*) FROM Category)+1
	INSERT INTO Category values( @Id , @Name);
	SELECT MAX(Id) from Category;
END
