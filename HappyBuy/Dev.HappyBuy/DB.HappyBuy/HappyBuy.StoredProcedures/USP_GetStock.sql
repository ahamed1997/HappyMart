CREATE PROCEDURE [dbo].[USP_GetStock]
AS
BEGIN
	select
	S.StockId,
	P.ProductId,
	P.ProductName,
	S.StockQuantity,
	P.ProductIsActive,
	V.VendorsName
	from Stock  S join Product P on P.ProductId = S.StockId join  Vendors V on V.VendorsId = S.StockVendorsId;
END