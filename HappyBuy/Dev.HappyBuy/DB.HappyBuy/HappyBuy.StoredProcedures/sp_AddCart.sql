CREATE PROCEDURE [dbo].[sp_AddCart]
		@CustomerId varchar (30),
		@ProductName varchar(100),
		@Quantity int
AS
BEGIN
	declare @Id varchar(10),@TempId int, @Count int,@ProductCount int,@ProductId varchar(50) ;
	set @Count = (select count(*) from Cart)+1;
	set @Id = 'CR' + (FORMAT(@Count,'0000'))
	set @ProductId = (select Id from Product where Name = @ProductName);
	set @ProductCount = (select COUNT(*) from Cart where CustomerId = @CustomerId 
	AND ProductId = @ProductId);
	IF(@ProductCount > 0)
	BEGIN
		UPDATE Cart set Quantity += @Quantity where ProductId = @ProductId
	END

	ELSE IF (@ProductCount < 1)
	BEGIN
		INSERT INTO Cart values(@Id, @CustomerId,@ProductId,@Quantity)
	END
END
