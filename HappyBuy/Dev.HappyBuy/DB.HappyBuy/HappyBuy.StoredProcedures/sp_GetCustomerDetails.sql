CREATE PROCEDURE [dbo].[sp_GetCustomerDetails]
	@Id varchar(10)
AS
BEGIN
	SELECT * FROM Customer where Id = @Id
END