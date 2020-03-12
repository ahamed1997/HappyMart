CREATE PROCEDURE [dbo].[sp_AddCart]
		@CustomerId varchar (30),
		@ProductName varchar(100),
		@Quantity int
AS
BEGIN
	DECLARE @Id varchar(10),@TempId int, @Count int,@ProductCount int,
	@ProductId varchar(50),@TotalPrice nvarchar(50),@TempPrice int;

	set @Count = (select count(*) from Cart)+1;
	set @Id = 'CR' + (FORMAT(@Count,'0000'))

	set @ProductId = (select Id from Product WHERE Name = @ProductName);
	set @ProductCount = (select COUNT(*) from Cart WHERE CustomerId = @CustomerId 
	AND ProductId = @ProductId);

	set @TotalPrice = (select Price from Product WHERE Id = @ProductId);	

	IF(@ProductCount > 0)
	BEGIN
		UPDATE Cart set Quantity += @Quantity WHERE ProductId = @ProductId;
		set @TempPrice = (SELECT CAST(@TotalPrice as int));
		set @TempPrice = @TempPrice * (select Quantity from Cart WHERE ProductId = @ProductId);

		declare @money money = @TempPrice;
		set @TotalPrice = (SELECT FORMAT ( @money,'C', 'ta-IN'));
		UPDATE Cart set TotalPrice = @TotalPrice WHERE ProductId = @ProductId;
	END
	ELSE IF (@ProductCount < 1)
	BEGIN
		INSERT INTO Cart values(@Id, @CustomerId,@ProductId,@TotalPrice,@Quantity)
	END
END
