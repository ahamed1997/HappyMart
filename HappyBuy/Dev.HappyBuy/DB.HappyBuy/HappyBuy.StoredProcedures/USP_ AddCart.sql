CREATE PROCEDURE [dbo].[USP_ AddCart]
	@CustomerId INT,
	@ProductId INT,
	@Quantity INT
AS
BEGIN
	DECLARE @Id INT, @ProductCount INT,@Price MONEY;
	set @ProductCount = (SELECT COUNT(*) from Cart WHERE CustomerId = @CustomerId AND ProductId = @ProductId);
	set @Price = (SELECT Price from Product WHERE Id = @ProductId);
	IF(@ProductCount > 0)
	BEGIN
		UPDATE Cart set Quantity += @Quantity WHERE CustomerId = @CustomerId AND ProductId = @ProductId;
		UPDATE Cart set Price = @Price * (SELECT Quantity from Cart where CustomerId = @CustomerId AND ProductId = @ProductId) WHERE ProductId = @ProductId;
	END
	ELSE IF (@ProductCount < 1)
	BEGIN
	set @Id = (SELECT COUNT(*) from Cart)+1;
		INSERT INTO Cart values(@Id, @CustomerId,@ProductId,@Price,@Quantity)
	END
END
