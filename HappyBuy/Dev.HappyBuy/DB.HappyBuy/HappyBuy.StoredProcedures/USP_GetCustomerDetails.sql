CREATE PROCEDURE [dbo].[USP_GetCustomerDetails]
	@CustomerId int
AS
BEGIN
	SELECT 
		CustomerId, 
		CustomerFirstName, 
		CustomerLastName,
		CustomerMobile,
		CustomerEmail,
		CustomerStreet,
		CustomerLandMark,
		CustomerCity,
		CustomerState,
		CustomerZipcode  from Customer where CustomerId = @CustomerId;	
END
