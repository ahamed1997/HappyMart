CREATE PROCEDURE [dbo].[sp_AddShippingAddress]
		@CustomerId varchar (30),
		@Mobile varchar(15),
		@Street varchar(100),
		@LandMark varchar(100),
		@City varchar(30), 
		@State varchar(30), 
		@Zipcode varchar(10)
AS
BEGIN
	DECLARE @Id varchar(10),@Count int
	set @Count = (select count(*) from ShippingAddress)+1;
	set @Id = 'SA' + (FORMAT(@Count,'0000'));

	INSERT into ShippingAddress values(@Id,@CustomerId,@Mobile,@Street,@landMark,@City,@State,@Zipcode);
END