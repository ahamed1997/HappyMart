CREATE PROCEDURE [dbo].[USP_AddCart]
	@CartCustomerId INT,
	@CartProductId INT,
	@CartQuantity INT
AS
BEGIN
	DECLARE @Id INT, @ProductCount INT,@CartPrice DECIMAL;
	set @ProductCount = (SELECT COUNT(*) from Cart WHERE CartCustomerId = @CartCustomerId AND CartProductId = @CartProductId);
	set @CartPrice = (SELECT ProductPrice from Product WHERE ProductId = @CartProductId);
	IF(@ProductCount > 0)
	BEGIN
		UPDATE Cart set CartQuantity += @CartQuantity WHERE CartCustomerId = @CartCustomerId AND CartProductId = @CartProductId;
		UPDATE Cart set CartPrice = @CartPrice * (SELECT CartQuantity from Cart where CartCustomerId = @CartCustomerId AND CartProductId = @CartProductId) WHERE CartProductId = @CartProductId;
	END
	ELSE IF (@ProductCount < 1)
	BEGIN
	set @Id = (SELECT COUNT(*) from Cart)+1;
		INSERT INTO Cart values(@Id, @CartCustomerId,@CartProductId,@CartPrice,@CartQuantity)
	END
END
