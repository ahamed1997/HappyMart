CREATE PROCEDURE [dbo].[USP_UpdateCartQuantity]
	@CartId INT,
	@CartQuantity INT
AS
BEGIN
	DECLARE @CartProductCount INT,@StockCount INT,@CartCount INT;
	set @CartProductCount = (SELECT CartQuantity from Cart WHERE CartId = @CartId);
	set @StockCount = (SELECT P.ProductQuantity from Product P JOIN Cart C on P.ProductId = C.CartProductId  where C.CartId  = @CartId);


	IF(@CartProductCount = @StockCount)
	BEGIN
		RETURN @CartProductCount;
	END

	IF(@CartQuantity > @CartProductCount)
	BEGIN
		UPDATE Cart set CartQuantity = CartQuantity + 1 WHERE CartId = @CartId;
		UPDATE Cart set CartPrice = 
		(SELECT P.ProductPrice from Product P JOIN Cart C on P.ProductId = C.CartProductId where C.CartId = @CartId) * 
		(SELECT CartQuantity from Cart where CartId = @CartId);
		SELECT CartQuantity from Cart WHERE CartId = @CartId;
	END

	IF(@CartQuantity < @CartProductCount)
	BEGIN
		IF((SELECT CartQuantity from Cart WHERE CartId = @CartId)=1)
		DELETE FROM Cart WHERE CartId = @CartId;
		set @CartProductCount = @CartId;
		set @CartCount = (SELECT COUNT(*) from Cart)
		WHILE(@CartProductCount <= @CartCount)
			BEGIN
				UPDATE Cart set CartId = @CartProductCount WHERE CartId = @CartProductCount +1;
				set @CartProductCount = @CartProductCount +1;
			END
		RETURN 0
		END
		ELSE IF((SELECT CartQuantity from Cart WHERE CartId = @CartId)>1)
		BEGIN
			UPDATE Cart set CartQuantity = CartQuantity - 1 WHERE CartId = @CartId;
			SELECT CartQuantity from Cart WHERE CartId = @CartId;
		END
	END


RETURN 0
