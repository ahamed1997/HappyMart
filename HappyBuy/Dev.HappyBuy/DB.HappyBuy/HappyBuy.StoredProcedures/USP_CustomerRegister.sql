CREATE PROCEDURE [dbo].[USP_CustomerRegister]
	@Firstname varchar(50),
	@Lastname varchar(50),
	@Mobile varchar(15),
	@Email varchar(30),
	@Password varchar(30),
	@Street varchar(100),
	@Landmark varchar(100),
	@City varchar(30),
	@State varchar(30),
	@Zipcode varchar(10)
AS
BEGIN
	DECLARE @Id INT; 
	set @Id = (SELECT COUNT(*) from Customer)+1;
	INSERT Customer values (@Id,@Firstname,@Lastname,@Mobile,@Email,@Password,@Street,@Landmark,@City,@State,@Zipcode);
RETURN SELECT MAX(Id) from Customer;
END