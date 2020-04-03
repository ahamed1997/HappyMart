CREATE TABLE [dbo].[Orders]
(
		OrdersId INT    NOT NULL primary key,
		OrdersCustomerId INT NOT NULL,
		OrdersShippingAddressId INT NOT NULL,
		OrdersDateOfOrder DATETIME NOT NULL,
		OrdersOrderStatusId INT NOT NULL,
		OrdersDateOfOrderCompleted DATETIME NULL,
		FOREIGN KEY (OrdersCustomerId) REFERENCES Customer(CustomerId),
		FOREIGN KEY (OrdersOrderStatusId) REFERENCES OrderStatus(OrdersStatusId),
		FOREIGN KEY (OrdersShippingAddressId) REFERENCES ShippingAddress(ShippingAddressId)
)
