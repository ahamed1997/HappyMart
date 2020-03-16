CREATE PROCEDURE [dbo].[USP_GetCustomerDetails]
	@Id int
AS
BEGIN
	SELECT 
		Id, 
		FirstName, 
		LastName,
		Mobile,
		Email,
		Street,
		LandMark,
		City,
		State,
		Zipcode  from Customer where Id = @Id;	
END
