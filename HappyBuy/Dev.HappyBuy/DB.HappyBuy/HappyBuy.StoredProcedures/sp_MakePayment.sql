CREATE PROCEDURE [dbo].[sp_MakePayment]
		@CustomerId varchar(30),
		@PaymentMode varchar(20),
		@AmountPaid nvarchar(30)
AS
BEGIN
	declare @Count int,@Datetime varchar(20),@Id varchar(30)
	set @Count = (select count(*) from Payment)+1;
	set @Id = 'PY' + (FORMAT(@Count,'0000'))
	set @Datetime = (select FORMAT (GETDATE(),'dd/MM/yyyy'))
	insert into Payment values(@Id,@CustomerId,@PaymentMode,@AmountPaid,@Datetime)
	select @Id;
END