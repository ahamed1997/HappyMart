CREATE PROCEDURE [dbo].[USP_UpdateShippingAddress]
	@Id INT,
	@CustomerId INT,
	@Mobile varchar(15),
	@Street varchar(100),
	@LandMark varchar(100),
	@City varchar(30), 
	@State varchar(30), 
	@Zipcode varchar(10)
AS
BEGIN
	UPDATE ShippingAddress
		set CustomerId = @CustomerId,
			Mobile = @Mobile,
			Street = @Street,
			LandMark = @LandMark,
			City = @City,
			State =@State,
			Zipcode = @Zipcode
			WHERE 
			Id = @Id;
	select Id from ShippingAddress where Id = @Id;
END
