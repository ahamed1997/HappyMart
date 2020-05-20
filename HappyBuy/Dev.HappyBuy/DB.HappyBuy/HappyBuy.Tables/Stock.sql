CREATE TABLE [dbo].[Stock]
(
	[StockId] INT NOT NULL PRIMARY KEY,
	StockQuantity INT NOT NULL,
	StockProductId INT NOT NULL,
	StockVendorsId INT NOT NULL,
	FOREIGN KEY (StockProductId) REFERENCES [dbo].[Product] ([ProductId]),
	FOREIGN KEY (StockVendorsId) REFERENCES [dbo].[Vendors] ([VendorsId])

)
