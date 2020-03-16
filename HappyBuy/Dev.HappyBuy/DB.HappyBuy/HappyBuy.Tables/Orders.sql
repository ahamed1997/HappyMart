CREATE TABLE [dbo].[Orders]
(
		Id INT    NOT NULL primary key,
		CustomerId INT NOT NULL,
		AddressId INT NOT NULL,
		DateOfOrder varchar(15) NOT NULL,
		OrderStatusId INT NOT NULL,
		DateOfOrderDispatched varchar(15) NULL,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (OrderStatusId) REFERENCES OrderStatus(Id),
		FOREIGN KEY (AddressId) REFERENCES ShippingAddress(Id)
)
