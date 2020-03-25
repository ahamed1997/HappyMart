﻿CREATE PROCEDURE [dbo].[USP_CustomerRegister]
	@CustomerFirstname varchar(50),
	@CustomerLastname varchar(50),
	@CustomerMobile varchar(15),
	@CustomerEmail varchar(30),
	@CustomerPassword varchar(30)
AS
BEGIN
	DECLARE @Id INT; 
	set @Id = (SELECT COUNT(*) from Customer)+1;
	INSERT Customer values (@Id,@CustomerFirstname,@CustomerLastname,@CustomerMobile,@CustomerEmail,@CustomerPassword);
	SELECT MAX(CustomerId) from Customer;
END