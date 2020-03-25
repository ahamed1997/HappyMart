CREATE PROCEDURE [dbo].[USP_UpdateShippingAddress]
	@ShippingAddressId INT,
	@ShippingAddressCustomerId INT,
	@ShippingAddressMobile varchar(15),
	@ShippingAddressStreet varchar(100),
	@ShippingAddressLandMark varchar(100),
	@ShippingAddressCity varchar(30), 
	@ShippingAddressState varchar(30), 
	@ShippingAddressZipcode varchar(10)
AS
BEGIN
	UPDATE ShippingAddress
		set ShippingAddressCustomerId = @ShippingAddressCustomerId,
			ShippingAddressMobile = @ShippingAddressMobile,
			ShippingAddressStreet = @ShippingAddressStreet,
			ShippingAddressLandMark = @ShippingAddressLandMark,
			ShippingAddressCity = @ShippingAddressCity,
			ShippingAddressState =@ShippingAddressState,
			ShippingAddressZipcode = @ShippingAddressZipcode
			WHERE 
			ShippingAddressId = @ShippingAddressId;
	select ShippingAddressId from ShippingAddress where ShippingAddressId = @ShippingAddressId;
END
