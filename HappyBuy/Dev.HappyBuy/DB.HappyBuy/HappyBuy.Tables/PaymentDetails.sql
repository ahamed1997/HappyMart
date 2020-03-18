﻿CREATE TABLE [dbo].[PaymentDetails]
(
	[Id] INT   NOT NULL PRIMARY KEY,
	PaymentId INT NOT NULL,
	PaymentModeId int NOT NULL,
	CardHolderName varchar(50) NOT NULL,
	CardNumber int NOT NULL,
	ExpiryMonth char(2) NOT NULL,
	ExpiryYear char(4) NOT NULL,
	CVV char(3) NOT NULL,
	DateOfPayment DATETIME NOT NULL,
	AmountPaid DECIMAL(10,2) NOT NULL,
	FOREIGN KEY ([PaymentId]) REFERENCES [dbo].[Payment] ([Id]),
	FOREIGN KEY ([PaymentModeId]) REFERENCES [dbo].[PaymentMode] ([Id])


)