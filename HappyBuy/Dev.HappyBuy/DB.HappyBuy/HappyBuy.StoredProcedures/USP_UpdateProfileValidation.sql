CREATE PROCEDURE [dbo].[USP_UpdateProfileValidation]
	@CustomerId INT,
	@CustomerPassword varchar(30)
AS
BEGIN
	SELECT count(*) FROM Customer WHERE CustomerId = @CustomerId AND (select convert(varchar(100),DecryptByPassPhrase('key', CustomerPassword ))) = @CustomerPassword
END