CREATE PROCEDURE [dbo].[USP_ForgotPasswordValidation]
	@CustomerEmail varchar(30)
AS
BEGIN
	SELECT COUNT(*) FROM Customer where CustomerEmail = @CustomerEmail ;
END

select * from Customer