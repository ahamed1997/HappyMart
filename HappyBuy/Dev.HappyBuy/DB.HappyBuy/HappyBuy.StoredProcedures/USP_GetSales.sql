CREATE PROCEDURE [dbo].[USP_GetSales]
AS
BEGIN

	select 
	OD.OrderDetailsId,
	P.ProductName,
	OD.OrderDetailsPrice,
	OD.OrderDetailsQuantity
	from 
	OrderDetails OD join Product P on P.ProductId = OD.OrderDetailsProductId join Orders O on O.OrdersId = OD.OrderDetailsOrdersId 

END