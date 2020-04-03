CREATE TABLE [dbo].[PaymentDetails]
(
	PaymentDetailsId INT   NOT NULL PRIMARY KEY,
	PaymentDetailsPaymentId INT NOT NULL,
	PaymentDetailsPaymentModeId int NOT NULL,
	PaymentDetailsCardHolderName varchar(50)  NULL,
	PaymentDetailsCardNumber varchar(50) NULL,
	PaymentDetailsExpiryMonth char(2)  NULL,
	PaymentDetailsExpiryYear char(4)  NULL,
	PaymentDetailsCVV char(3)  NULL,
	PaymentDetailsDateOfPayment DATETIME NOT NULL,
	PaymentDetailsAmountPaid DECIMAL(10,2) NOT NULL,
	FOREIGN KEY ([PaymentDetailsPaymentId]) REFERENCES [dbo].[Payment] ([PaymentId]),
	FOREIGN KEY ([PaymentDetailsPaymentModeId]) REFERENCES [dbo].[PaymentMode] ([PaymentModeId])


)
