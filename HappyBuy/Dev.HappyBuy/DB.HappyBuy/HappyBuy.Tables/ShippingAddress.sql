CREATE TABLE [dbo].[ShippingAddress]
(
		ShippingAddressId INT   primary key,
		ShippingAddressCustomerId INT NOT NULL,
		ShippingAddressStreet varchar(100) NOT NULL,
		ShippingAddressCity varchar(30) NOT NULL, 
		ShippingAddressState varchar(30) NOT NULL, 
		ShippingAddressZipcode varchar(10) NOT NULL,
		ShippingAddressCountryCode varchar(10),
		ShippingAddressName varchar(30) NULL,
		FOREIGN KEY (ShippingAddressCustomerId) REFERENCES Customer(CustomerId)
)
