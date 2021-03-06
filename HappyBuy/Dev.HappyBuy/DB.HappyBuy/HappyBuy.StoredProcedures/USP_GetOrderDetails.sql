﻿CREATE PROCEDURE [dbo].[USP_GetOrderDetails]
@OrdersCustomerId int
	AS
BEGIN

		Select 
		O.OrdersId,
		(FORMAT ((O.OrdersDateOfOrder), 'd', 'no' )  )AS OrdersDateOfOrder,
		(FORMAT ((O.OrdersDateOfOrderCompleted), 'd', 'no' )  )AS OrdersDateOfOrderCompleted,
		OS.OrdersStatusState,
		OD.OrderDetailsPrice,
		OD.OrderDetailsQuantity,
		SA.ShippingAddressStreet,
		SA.ShippingAddressCity,
		SA.ShippingAddressState,
		SA.ShippingAddressZipcode,
		SA.ShippingAddressCountryCode,
		SA.ShippingAddressName,
		PD.PaymentDetailsTransactionId,
		PD.PaymentDetailsPayerName,
		PD.PaymentDetailsPayerId,
		PD.PaymentDetailsPayeeId,
		PD.PaymentDetailsAmountPaid,
		P.ProductId,
		P.ProductName,
		P.ProductPrice,
		P.ProductSpecification,
		P.ProductBrand		
		from Orders O inner join OrderDetails OD on O.OrdersId = OD.OrderDetailsOrdersId join OrderStatus OS on OS.OrdersStatusId = O.OrdersOrderStatusId
		join ShippingAddress SA on SA.ShippingAddressId = O.OrdersShippingAddressId join Payment PT on PT.PaymentOrderId = O.OrdersId join PaymentDetails PD on
		PD.PaymentDetailsPaymentId = PT.PaymentId join Product P on P.ProductId = OD.OrderDetailsProductId where O.OrdersCustomerId = @OrdersCustomerId;		

END