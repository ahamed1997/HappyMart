﻿CREATE PROCEDURE [dbo].[USP_GetAllOrderStatus]
AS
BEGIN
	SELECT * FROM OrderStatus;
END