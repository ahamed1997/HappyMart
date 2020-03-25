CREATE PROCEDURE [dbo].[USP_GetShippingAddress]
	@ShippingAddressCustomerId INT
AS
BEGIN
	SELECT 
		ShippingAddressId,
		ShippingAddressCustomerId,
		ShippingAddressMobile,
		ShippingAddressStreet,
		ShippingAddressLandMark,
		ShippingAddressCity,
		ShippingAddressState,
		ShippingAddressZipcode
	from ShippingAddress 
	WHERE ShippingAddressCustomerId = @ShippingAddressCustomerId;
END