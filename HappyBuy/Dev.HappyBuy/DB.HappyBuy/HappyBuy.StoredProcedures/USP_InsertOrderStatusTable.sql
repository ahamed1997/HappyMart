CREATE PROCEDURE [dbo].[USP_InsertOrderStatusTable]
	@OrdersState varchar(20)
AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT COUNT(*) from OrderStatus)+1;
	INSERT into OrderStatus values (@Id,@OrdersState);
	select Max(OrdersStatusId) from OrderStatus;
END
