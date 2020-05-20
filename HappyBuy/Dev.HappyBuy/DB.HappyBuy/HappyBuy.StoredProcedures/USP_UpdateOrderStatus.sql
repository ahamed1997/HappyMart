CREATE PROCEDURE [dbo].[USP_UpdateOrderStatus]
	@OrdersOrderStatusId INT,
	@OrdersId INT
AS
BEGIN
	update Orders set OrdersOrderStatusId = @OrdersOrderStatusId where OrdersId = @OrdersId;
	IF(@OrdersOrderStatusId > 4)
	BEGIN
	update Orders set OrdersDateOfOrderCompleted = (SELECT GETDATE()) where OrdersId =@OrdersId ;
	END
	EXEC USP_GetAllOrders;
END