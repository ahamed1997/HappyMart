CREATE PROCEDURE [dbo].[USP_UpdateShippingAddress]
	@ShippingAddressId INT,
	@ShippingAddressCustomerId INT,
	@ShippingAddressStreet varchar(100),
	@ShippingAddressCity varchar(30), 
	@ShippingAddressState varchar(30), 
	@ShippingAddressZipcode varchar(10),
	@ShippingAddressCountryCode varchar(10),
	@ShippingAddressName varchar(30)
AS
BEGIN
	UPDATE ShippingAddress
		set ShippingAddressCustomerId = @ShippingAddressCustomerId,
			ShippingAddressStreet = @ShippingAddressStreet,
			ShippingAddressCity = @ShippingAddressCity,
			ShippingAddressState =@ShippingAddressState,
			ShippingAddressZipcode = @ShippingAddressZipcode,
			ShippingAddressCountryCode=@ShippingAddressCountryCode,
			ShippingAddressName = @ShippingAddressName
			WHERE 
			ShippingAddressId = @ShippingAddressId;
	select ShippingAddressId from ShippingAddress where ShippingAddressId = @ShippingAddressId;
END



	
		