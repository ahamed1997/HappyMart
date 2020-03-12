CREATE PROCEDURE [dbo].[sp_InsertCategory]
	@Name varchar(50)
AS
BEGIN
	DECLARE @Id varchar(10),@TempId int, @Count int;
	set @Count = (SELECT count(*) FROM Category)+1;
	set @Id = 'CT' + (FORMAT(@Count,'0000'))
	INSERT INTO Category values( @Id , @Name);
END