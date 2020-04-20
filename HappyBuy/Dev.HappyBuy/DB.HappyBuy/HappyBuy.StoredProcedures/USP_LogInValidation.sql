CREATE PROCEDURE [dbo].[USP_LogInValidation]
	@CustomerEmail varchar(30),
	@CustomerPassword varchar(30)
AS
BEGIN
	SELECT
		CustomerId,
		CustomerFirstName,
		CustomerLastName,
		CustomerMobile,
		CustomerEmail
	from Customer WHERE CustomerEmail = @CustomerEmail AND 
	(select convert(varchar(100),DecryptByPassPhrase('key', CustomerPassword ))) = @CustomerPassword
END
