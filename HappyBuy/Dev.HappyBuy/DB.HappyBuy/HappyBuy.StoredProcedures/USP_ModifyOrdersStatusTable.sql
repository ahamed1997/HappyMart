CREATE PROCEDURE [dbo].[USP_ModifyOrdersStatusTable]
	@OrdersStatusId INT,
	@OrdersStatusState varchar(20)

AS
BEGIN
	UPDATE OrderStatus set OrdersStatusState = @OrdersStatusState where OrdersStatusId = @OrdersStatusId;
	SELECT OrdersStatusId from OrderStatus where OrdersStatusId = @OrdersStatusId;
END
