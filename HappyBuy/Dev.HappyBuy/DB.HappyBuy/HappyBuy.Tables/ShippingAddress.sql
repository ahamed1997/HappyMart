CREATE TABLE [dbo].[ShippingAddress]
(
		ShippingAddressId INT   primary key,
		ShippingAddressCustomerId INT NOT NULL,
		ShippingAddressMobile varchar(15) NOT NULL,
		ShippingAddressStreet varchar(100) NOT NULL,
		ShippingAddressLandMark varchar(100) NOT NULL,
		ShippingAddressCity varchar(30) NOT NULL, 
		ShippingAddressState varchar(30) NOT NULL, 
		ShippingAddressZipcode varchar(10) NOT NULL,
		FOREIGN KEY (ShippingAddressCustomerId) REFERENCES Customer(CustomerId)
)
