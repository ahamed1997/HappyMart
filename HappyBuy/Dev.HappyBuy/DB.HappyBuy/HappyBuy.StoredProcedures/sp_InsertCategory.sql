CREATE PROCEDURE [dbo].[sp_InsertCategory]
	@Categories varchar(50)
AS
BEGIN
	declare @Id varchar(10),@TempId int, @Count int;
	set @Count = (select count(*) from Category)+1;
	set @Id = 'CT' + (FORMAT(@Count,'0000'))
	INSERT INTO Category values( @Id , @Categories);
END