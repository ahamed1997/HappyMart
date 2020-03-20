CREATE TABLE [dbo].[OrderDetails]
(
	OrderDetailsId INT   NOT NULL PRIMARY KEY,
	OrderDetailsProductId  INT NOT NULL,
	OrderDetailsOrdersId INT NOT NULL,
	OrderDetailsQuantity INT NOT NULL,
	OrderDetailsPrice DECIMAL NOT NULL,
	FOREIGN KEY ([OrderDetailsOrdersId]) REFERENCES [dbo].[Orders] ([OrdersId]),
	FOREIGN KEY ([OrderDetailsProductId]) REFERENCES [dbo].[Product] ([ProductId]),
	

)
