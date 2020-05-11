CREATE PROCEDURE [dbo].[USP_GetAllCustomers]
	AS
	BEGIN
		SELECT CustomerId, CustomerFirstName, CustomerLastName, CustomerMobile, CustomerEmail, CustomerPassword  = (SELECT CONVERT(VARCHAR(1000), ( CustomerPassword  ), 2 )as CustomerPassword ) FROM Customer;
	END
