CREATE PROCEDURE [dbo].[USP_GetAllOrders]
	AS
BEGIN
	SELECT
		O.OrdersId,
		C.CustomerFirstName,
		C.CustomerLastName,
		SA.ShippingAddressId,
		SA.ShippingAddressCustomerId,
		SA.ShippingAddressName,
		SA.ShippingAddressStreet,
		SA.ShippingAddressCity,
		SA.ShippingAddressState,
		SA.ShippingAddressZipcode,
		SA.ShippingAddressCountryCode,
		(FORMAT ((O.OrdersDateOfOrder), 'd', 'no' )  )AS OrdersDateOfOrder,
		OS.OrdersStatusState,
		(FORMAT ((O.OrdersDateOfOrderCompleted), 'd', 'no' )  )AS OrdersDateOfOrderCompleted,
		PD.PaymentDetailsAmountPaid
	from Orders O JOIN Customer C on C.CustomerId = O.OrdersCustomerId join ShippingAddress SA ON SA.ShippingAddressId = O.OrdersShippingAddressId
	join OrderStatus OS on OS.OrdersStatusId = O.OrdersOrderStatusId join Payment P on P.PaymentOrderId = O.OrdersId 
	join PaymentDetails PD on PD.PaymentDetailsPaymentId = P.PaymentId;
END

