CREATE PROCEDURE [dbo].[USP_PlaceOrder]
	@OrderDetailsProductId  INT ,
	@OrderDetailsQuantity INT ,
	@OrderDetailsPrice DECIMAL,
	@ShippingAddressName varchar(30),
	@ShippingAddressStreet varchar(100),
	@ShippingAddressCity varchar(30), 
	@ShippingAddressState varchar(30), 
	@ShippingAddressZipcode varchar(10),
	@ShippingAddressCountryCode varchar(10),
	@OrdersCustomerId int,
	@PaymentDetailsPaymentModeId int,
	@PaymentDetailsAmountPaid Decimal,
	@PaymentDetailsTransactionId nvarchar(20),
	@PaymentDetailsPayerId nvarchar(20),
	@PaymentDetailsPayerName varchar(30),
	@PaymentDetailsPayeeId nvarchar(20),
	@PaymentDetailsPayeeEmailId varchar(30)
AS
BEGIN
	DECLARE 
	@OrderId INT, 
	@OrderDetailsId INT,
	@CurrentDate DATETIME,
	@PaymentId int,
	@PaymentDetailsId int,
	@validate INT;
	set @validate = (select COUNT(*) from PaymentDetails where PaymentDetailsTransactionId = @PaymentDetailsTransactionId);

	IF(@validate =0)
	BEGIN

				DECLARE @Id INT;
				set @Id = (SELECT count(*) from ShippingAddress)+1;
				INSERT into ShippingAddress values(@Id,@OrdersCustomerId,@ShippingAddressStreet,@ShippingAddressCity,@ShippingAddressState,@ShippingAddressZipcode,@ShippingAddressCountryCode,@ShippingAddressName);

				set @OrderId = (SELECT COUNT(*) from Orders)+1;
				set @CurrentDate = (SELECT GETDATE());
				INSERT into Orders values (@OrderId,@OrdersCustomerId,@Id,@CurrentDate,2,NULL);
	
				set @PaymentId = (SELECT COUNT(*) from Payment)+1;
				INSERT into Payment values(@PaymentId,@OrderId);

				IF(@PaymentDetailsPaymentModeId != 1)
				BEGIN
					set @PaymentDetailsId = (SELECT COUNT(*) from PaymentDetails)+1;
		
					INSERT into PaymentDetails values(
					@PaymentDetailsId,
					@PaymentId,
					@PaymentDetailsPaymentModeId,
					@CurrentDate,
					@PaymentDetailsAmountPaid,
					@PaymentDetailsTransactionId,
					@PaymentDetailsPayerId,
					@PaymentDetailsPayerName,
					@PaymentDetailsPayeeId,
					@PaymentDetailsPayeeEmailId
					);
	
				END
				ELSE IF (@PaymentDetailsPaymentModeId = 1)
				BEGIN
					set @PaymentDetailsId = (SELECT COUNT(*) from PaymentDetails)+1;
					INSERT into PaymentDetails values(
					@PaymentDetailsId,
					@PaymentId,
					@PaymentDetailsPaymentModeId,
					@CurrentDate,
					@PaymentDetailsAmountPaid,
					NULL,
					NULL,
					NULL,
					NULL,
					NULL
					);
				END

				DECLARE @Count int;
				set @Count = (SELECT COUNT(*) from OrderDetails)+1;
				INSERT into OrderDetails  values (@Count,@OrderDetailsProductId,@OrderId,@OrderDetailsQuantity,@OrderDetailsPrice);
				Update Product set ProductQuantity = ProductQuantity -@OrderDetailsQuantity where ProductId = @OrderDetailsProductId;


				IF((SELECT COUNT(*) FROM Cart where CartCustomerId=@OrdersCustomerId AND CartProductId = @OrderDetailsProductId)!=0)
				BEGIN
					delete from Cart where CartCustomerId=@OrdersCustomerId AND CartProductId = @OrderDetailsProductId;
				END
				select @OrderId;
		END
		ELSE IF(@validate != 0)
		BEGIN
			DECLARE @Counts int,@OrderDetailsOrdersId int;
			set @Counts = (SELECT COUNT(*) from OrderDetails)+1;
			set @OrderDetailsOrdersId = (SELECT MAX(OrdersId) from Orders where OrdersCustomerId = @OrdersCustomerId);
			INSERT into OrderDetails  values (@Counts,@OrderDetailsProductId,@OrderDetailsOrdersId,@OrderDetailsQuantity,@OrderDetailsPrice);
			Update Product set ProductQuantity = ProductQuantity - @OrderDetailsQuantity where ProductId = @OrderDetailsProductId;


			IF((SELECT COUNT(*) FROM Cart where CartCustomerId=@OrdersCustomerId AND CartProductId = @OrderDetailsProductId)!=0)
			BEGIN
				delete from Cart where CartCustomerId=@OrdersCustomerId AND CartProductId = @OrderDetailsProductId;
			END
			SELECT @OrderDetailsOrdersId;
		END
END

