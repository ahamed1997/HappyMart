CREATE PROCEDURE [dbo].[USP_InsertCategory]
	@Name varchar(50)
AS
BEGIN
	DECLARE @Id INT;	
	set @Id = (SELECT COUNT(*) FROM Category)+1
	INSERT INTO Category values( @Id , @Name);
	RETURN SELECT MAX(Id) from Category;
END
