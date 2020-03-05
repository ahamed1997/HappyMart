CREATE PROCEDURE [dbo].[GetCustomerDetails]
	@Id varchar(10)
AS
BEGIN
 return SELECT * FROM Customer where Id = @Id
END