CREATE PROCEDURE [dbo].[CustomerEntity]
	@Id varchar(10),
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
 insert   Customer  values 
 (@Id,@Firstname,@Lastname,@Mobile,@Email,@Password,@Street,@Landmark,@City,@State,@Zipcode)
 return
END