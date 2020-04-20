CREATE TABLE [dbo].[PaymentDetails]
(
	PaymentDetailsId INT   NOT NULL PRIMARY KEY,
	PaymentDetailsPaymentId INT NOT NULL,
	PaymentDetailsPaymentModeId int NOT NULL,
	PaymentDetailsDateOfPayment DATETIME NOT NULL,
	PaymentDetailsAmountPaid DECIMAL(10,2) NOT NULL,
	PaymentDetailsTransactionId nvarchar(20) NOT NULL,
	PaymentDetailsPayerId nvarchar(20) NOT NULL,
	PaymentDetailsPayerName varchar(30) NOT NULL,
	PaymentDetailsPayeeId nvarchar(20) NOT NULL,
	PaymentDetailsPayeeEmailId varchar(30) NOT NULL,
	FOREIGN KEY ([PaymentDetailsPaymentId]) REFERENCES [dbo].[Payment] ([PaymentId]),
	FOREIGN KEY ([PaymentDetailsPaymentModeId]) REFERENCES [dbo].[PaymentMode] ([PaymentModeId])


)
