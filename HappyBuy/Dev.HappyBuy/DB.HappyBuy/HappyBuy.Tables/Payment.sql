CREATE TABLE [dbo].[Payment]
(
	PaymentId INT   primary key, 
	PaymentOrderId INT NOT NULL,
	FOREIGN KEY (PaymentOrderId) REFERENCES Orders(OrdersId)
)
