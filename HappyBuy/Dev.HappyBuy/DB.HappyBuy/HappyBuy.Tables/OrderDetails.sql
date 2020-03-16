CREATE TABLE [dbo].[OrderDetails]
(
	[Id] INT   NOT NULL PRIMARY KEY,
	ProductId  INT NOT NULL,
	OrderId INT NOT NULL,
	Quantity INT NOT NULL,
	Price MONEY NOT NULL,
	FOREIGN KEY ([OrderId]) REFERENCES [dbo].[Orders] ([Id]),
	FOREIGN KEY ([ProductId]) REFERENCES [dbo].[Product] ([Id]),
	

)
