CREATE PROCEDURE [dbo].[USP_UpdateProfile]
	@CustomerId INT,
	@CustomerFirstname varchar(50),
	@CustomerLastname varchar(50),
	@CustomerMobile varchar(15),
	@CustomerEmail varchar(30),
	@CustomerPassword varchar(30)
AS
BEGIN
	DECLARE @Id INT,@encryptedPassword varbinary(4000); 
	set @encryptedPassword = EncryptByPassPhrase('key', @CustomerPassword)

	update Customer set CustomerFirstName = @CustomerFirstname, CustomerLastName = @CustomerLastname, CustomerMobile = @CustomerMobile, CustomerEmail = @CustomerEmail, CustomerPassword = @encryptedPassword where CustomerId = @CustomerId;
	SELECT @CustomerId;
END