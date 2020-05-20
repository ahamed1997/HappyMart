CREATE TABLE [dbo].[Vendors]
(
	[VendorsId] INT NOT NULL PRIMARY KEY,
	VendorsName varchar(50) NOT NULL,
	VendorsTIN varchar(50) NOT NULL,
	VendorsMobile varchar(15) NOT NULL,
	VendorsEmail varchar(30) NOT NULL,
	VendorsAddress varchar(200) NOT NULL
)
