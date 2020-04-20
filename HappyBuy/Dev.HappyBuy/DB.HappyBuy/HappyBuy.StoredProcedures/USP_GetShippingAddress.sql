CREATE PROCEDURE [dbo].[USP_GetShippingAddress]
	@ShippingAddressCustomerId INT
AS
BEGIN
	SELECT 
		ShippingAddressId,
		ShippingAddressCustomerId,
		ShippingAddressStreet,
		ShippingAddressCity,
		ShippingAddressState,
		ShippingAddressZipcode,
		ShippingAddressCountryCode,
		ShippingAddressName
	from ShippingAddress 
	WHERE ShippingAddressCustomerId = @ShippingAddressCustomerId;
END

