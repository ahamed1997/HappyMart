CREATE TABLE [dbo].[Orders]
(
		OrdersId INT    NOT NULL primary key,
		OrdersCustomerId INT NOT NULL,
		OrdersShippingAddressId INT NOT NULL,
		OrdersDateOfOrder varchar(15) NOT NULL,
		OrdersOrderStatusId INT NOT NULL,
		OrdersDateOfOrderDispatched varchar(15) NULL,
		FOREIGN KEY (OrdersCustomerId) REFERENCES Customer(CustomerId),
		FOREIGN KEY (OrdersOrderStatusId) REFERENCES OrderStatus(OrdersStatusId),
		FOREIGN KEY (OrdersShippingAddressId) REFERENCES ShippingAddress(ShippingAddressId)
)
