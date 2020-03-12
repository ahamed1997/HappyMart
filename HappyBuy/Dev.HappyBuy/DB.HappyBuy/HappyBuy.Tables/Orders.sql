CREATE TABLE [dbo].[Orders]
(
	Id varchar(30) primary key,
		Quantity int,
		Price int,
		DateOrdered varchar(15),
		DateReceived varchar(15),
		Status varchar(20),
		CustomerId varchar (30),
		PaymentId varchar(30),
		ProductId varchar(50),
		AddressId varchar(10),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (PaymentId) REFERENCES Payment(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id),
		FOREIGN KEY (AddressId) REFERENCES ShippingAddress(Id)
)
