CREATE PROCEDURE [dbo].[USP_CustomerRegister]
	@CustomerFirstname varchar(50),
	@CustomerLastname varchar(50),
	@CustomerMobile varchar(15),
	@CustomerEmail varchar(30),
	@CustomerPassword varchar(30),
	@CustomerStreet varchar(100),
	@CustomerLandmark varchar(100),
	@CustomerCity varchar(30),
	@CustomerState varchar(30),
	@CustomerZipcode varchar(10)
AS
BEGIN
	DECLARE @Id INT; 
	set @Id = (SELECT COUNT(*) from Customer)+1;
	INSERT Customer values (@Id,@CustomerFirstname,@CustomerLastname,@CustomerMobile,@CustomerEmail,@CustomerPassword,@CustomerStreet,@CustomerLandmark,@CustomerCity,@CustomerState,@CustomerZipcode);
	SELECT MAX(CustomerId) from Customer;
END