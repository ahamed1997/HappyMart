CREATE TABLE [dbo].[PaymentDetails]
(
	[Id] INT NOT NULL PRIMARY KEY,
	PaymentId INT NOT NULL,
	PaymentMode varchar(10) NOT NULL,
	CardHolderName varchar(50) NOT NULL,
	CardNumber varchar(16) NOT NULL,
	ExpiryMonth char(2) NOT NULL,
	ExpiryYear char(4) NOT NULL,
	CVV char(3) NOT NULL,
	DateOfPayment DATETIME NOT NULL,
	AmountPaid decimal(10,2) NOT NULL,
	FOREIGN KEY ([PaymentId]) REFERENCES [dbo].[Payment] ([Id])

)
