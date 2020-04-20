CREATE PROCEDURE [dbo].[USP_UpdatePassword]
	@CustomerEmail varchar(30),
	@CustomerPassword varchar(30)
AS
BEGIN
	DECLARE @encryptedPassword varbinary(4000); 
	set @encryptedPassword = EncryptByPassPhrase('key', @CustomerPassword)
	UPDATE Customer set CustomerPassword = @encryptedPassword where CustomerEmail = @CustomerEmail;
	SELECT COUNT(*) FROM Customer where CustomerEmail = @CustomerEmail ;
END
