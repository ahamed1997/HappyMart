CREATE PROCEDURE [dbo].[USP_MakePayment]
	@OrderDetailsProductId  INT ,
	@OrderDetailsOrdersId INT ,
	@OrderDetailsQuantity INT ,
	@OrderDetailsPrice DECIMAL
AS
BEGIN
	DECLARE @Count int;
	set @Count = (SELECT COUNT(*) from OrderDetails)+1;
	INSERT into OrderDetails  values (@Count,@OrderDetailsProductId,@OrderDetailsOrdersId,@OrderDetailsQuantity,@OrderDetailsPrice);
	SELECT @OrderDetailsOrdersId;
END