CREATE PROCEDURE [dbo].[USP_GetSalesByProducts]
AS
BEGIN
	select 
	SUM(OD.OrderDetailsPrice) as OrderDetailsPrice,
	SUM(OD.OrderDetailsQuantity) as OrderDetailsQuantity,
	P.ProductId
	from 
	OrderDetails OD right outer join Product P on P.ProductId = OD.OrderDetailsProductId GROUP BY P.ProductId ;
END
