CREATE PROCEDURE [dbo].[USP_PlaceOrder]
	@OrdersCustomerId int,
	@OrdersShippingAddressId int,
	@OrdersOrderStatusId int,
	@PaymentDetailsPaymentModeId int,
	@PaymentDetailsCardNumber VARCHAR(50),
	@PaymentDetailsCardHolderName varchar(50),
	@PaymentDetailsExpiryMonth char(2),
	@PaymentDetailsExpiryYear char(4) ,
	@PaymentDetailsCVV char(3),
	@OrderDetailsPrice Decimal
AS
BEGIN
	DECLARE 
	@OrderId INT, 
	@OrderDetailsId INT,
	@CurrentDate DATETIME,
	@PaymentId int,
	@PaymentDetailsId int;

	set @OrderId = (SELECT COUNT(*) from Orders)+1;
	set @CurrentDate = (Select CONVERT(varchar,GETDATE(),103) as [DD/MM/YYYY]);
	INSERT into Orders values (@OrderId,@OrdersCustomerId,@OrdersShippingAddressId,@CurrentDate,@OrdersOrderStatusId,NULL);
	
	set @PaymentId = (SELECT COUNT(*) from Payment)+1;
	INSERT into Payment values(@PaymentId,@OrderId);

	IF(@PaymentDetailsPaymentModeId = 2)
	BEGIN
		set @PaymentDetailsId = (SELECT COUNT(*) from PaymentDetails)+1;
		
		INSERT into PaymentDetails values(
		@PaymentDetailsId,
		@PaymentId,
		@PaymentDetailsPaymentModeId,
		@PaymentDetailsCardNumber,
		@PaymentDetailsCardHolderName,
		@PaymentDetailsExpiryMonth,
		@PaymentDetailsExpiryYear,
		@PaymentDetailsCVV,
		@CurrentDate,
		@OrderDetailsPrice
		);
	
	END
	ELSE IF (@PaymentDetailsPaymentModeId = 1)
	BEGIN
		set @PaymentDetailsId = (SELECT COUNT(*) from PaymentDetails)+1;
		INSERT into PaymentDetails values(
		@PaymentDetailsId,
		@PaymentId,
		@PaymentDetailsPaymentModeId,
		NULL,
		NULL,
		NULL,
		NULL,
		NULL,
		@CurrentDate,
		@OrderDetailsPrice
		);
	END
	select @OrderId;
END
