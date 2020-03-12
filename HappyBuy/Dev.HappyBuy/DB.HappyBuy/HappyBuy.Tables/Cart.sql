CREATE TABLE [dbo].[Cart]
(
	Id varchar(20) primary key,
		CustomerId varchar (30),
		ProductId varchar(50),
		TotalPrice nvarchar(MAX),
		Quantity int,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id)
)
