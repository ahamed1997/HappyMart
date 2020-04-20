CREATE PROCEDURE [dbo].[USP_AddShippingAddress]
		@ShippingAddressCustomerId INT,
		@ShippingAddressStreet varchar(100),
		@ShippingAddressCity varchar(30), 
		@ShippingAddressState varchar(30), 
		@ShippingAddressZipcode varchar(10),
		@ShippingAddressCountryCode varchar(10),
		@ShippingAddressName varchar(30)
AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT count(*) from ShippingAddress)+1;
	INSERT into ShippingAddress values(@Id,@ShippingAddressCustomerId,@ShippingAddressStreet,@ShippingAddressCity,@ShippingAddressState,@ShippingAddressZipcode,@ShippingAddressCountryCode,@ShippingAddressName);
	SELECT MAX(ShippingAddressId) from ShippingAddress;
END

