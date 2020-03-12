CREATE TABLE [dbo].[Payment]
(
	Id varchar(30) primary key, 
		CustomerId varchar(30),
		PaymentMode varchar(20),
		AmountPaid nvarchar(MAX),
		DateOfPayment varchar(15),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
)
