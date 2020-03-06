CREATE PROCEDURE [dbo].[sp_CustomerRegistration]
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

declare @Id varchar(30),@TempId varchar(30), @Count int
set @Count = (select count(*) from Customer)+1;
set @TempId = (FORMAT(@Count,'000000000'));
set @Id = 'HBCUS' + @TempId;
	insert  Customer values 
	(@Id,@Firstname,@Lastname,@Mobile,@Email,@Password,@Street,@Landmark,@City,@State,@Zipcode)
END


