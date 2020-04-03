CREATE PROCEDURE [dbo].[USP_AddShippingAddress]
		@ShippingAddressCustomerId INT,
		@ShippingAddressMobile varchar(15),
		@ShippingAddressStreet varchar(100),
		@ShippingAddressLandMark varchar(100),
		@ShippingAddressCity varchar(30), 
		@ShippingAddressState varchar(30), 
		@ShippingAddressZipcode varchar(10)

AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT count(*) from ShippingAddress)+1;
	INSERT into ShippingAddress values(@Id,@ShippingAddressCustomerId,@ShippingAddressMobile,@ShippingAddressStreet,@ShippingAddressLandMark,@ShippingAddressCity,@ShippingAddressState,@ShippingAddressZipcode);
	SELECT MAX(ShippingAddressId) from ShippingAddress;
END