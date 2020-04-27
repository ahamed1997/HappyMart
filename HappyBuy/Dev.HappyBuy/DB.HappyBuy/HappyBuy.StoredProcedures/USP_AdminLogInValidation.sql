CREATE PROCEDURE [dbo].[USP_AdminLogInValidation]
	@AdminEmail varchar(30),
	@AdminPassword varchar(30)
AS
BEGIN
	SELECT
		AdminId,
		AdminFirstName,
		AdminLastName,
		AdminMobile,
		AdminEmail
	from Admin WHERE AdminEmail = @AdminEmail AND 
	(select convert(varchar(100),DecryptByPassPhrase('key', AdminPassword ))) = @AdminPassword
END
