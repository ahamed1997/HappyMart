CREATE PROCEDURE [dbo].[USP_AddShippingAddress]
		@CustomerId INT,
		@Mobile varchar(15),
		@Street varchar(100),
		@LandMark varchar(100),
		@City varchar(30), 
		@State varchar(30), 
		@Zipcode varchar(10)

AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT count(*) from ShippingAddress)+1;
	INSERT into ShippingAddress values(@Id,@CustomerId,@Mobile,@Street,@landMark,@City,@State,@Zipcode);
	RETURN (SELECT MAX(Id) from ShippingAddress);
END