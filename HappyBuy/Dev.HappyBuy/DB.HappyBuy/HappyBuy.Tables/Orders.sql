CREATE TABLE [dbo].[Orders]
(
		Id INT NOT NULL primary key,
		DateOrdered varchar(15),
		DateReceived varchar(15),
		StatusId INT,
		CustomerId INT,
		PaymentId INT,
		AddressId INT,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (PaymentId) REFERENCES Payment(Id),
		FOREIGN KEY (StatusId) REFERENCES Status(Id),
		FOREIGN KEY (AddressId) REFERENCES ShippingAddress(Id)
)
