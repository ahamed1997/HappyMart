CREATE PROCEDURE [dbo].[USP_PlaceOrder]
	@CustomerId INT,
	@AddressId INT,
	@ProductId INT,
	@Quantity INT,
	@Price MONEY,
	@OrderStatusId INT

AS
BEGIN
	DECLARE @OrderId INT, @OrderDetailsId INT,@CurrentDate DATETIME;
	set @OrderId = (SELECT COUNT(*) from Orders)+1;
	set @CurrentDate = (Select CONVERT(varchar,GETDATE(),103) as [DD/MM/YYYY]);
END

