﻿CREATE PROCEDURE [dbo].[sp_PlaceOrder]
		@Quantity int,
		@Price int,
		@DateOrdered datetime,
		@DateReceived datetime,
		@Status varchar(20),
		@CustomerId varchar (30),
		@PaymentId varchar(30),
		@ProductId varchar(50),
		@AddressId varchar(10)
AS
BEGIN
	DECLARE @Id varchar(30),@Count int
	set @Count = (select count(*) FROM Orders)+1;
	set @Id = 'ORD' + (FORMAT(@Count,'000000'));

	INSERT into Orders values(@Id,@Quantity,@Price,@DateOrdered,@DateReceived,@Status,@CustomerId,@PaymentId,@ProductId,@AddressId);
END