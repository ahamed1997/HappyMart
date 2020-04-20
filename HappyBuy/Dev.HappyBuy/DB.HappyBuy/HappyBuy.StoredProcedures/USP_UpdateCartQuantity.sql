CREATE PROCEDURE [dbo].[USP_UpdateCartQuantity]
	@CartCustomerId INT,
	@CartId INT,
	@CartQuantity INT
	
AS
BEGIN
	DECLARE @CartProductCount INT,@Stock INT,@CartCount INT;
	set @CartProductCount = (SELECT CartQuantity from Cart WHERE CartId = @CartId);
	set @Stock = (SELECT P.ProductQuantity from Product P JOIN Cart C on P.ProductId = C.CartProductId  where C.CartId  = @CartId);


	IF(@CartQuantity = @Stock)
	BEGIN		
		 EXEC USP_GetCartItems @CartCustomerId
	END	
	ELSE IF(@CartQuantity > @CartProductCount)
	BEGIN
		UPDATE Cart set CartQuantity = @CartQuantity WHERE CartId = @CartId;
		update Cart set CartPrice = ((SELECT P.ProductPrice from Product P JOIN Cart C on P.ProductId = C.CartProductId where C.CartId = @CartId) * (SELECT CartQuantity from Cart where CartId = @CartId))
		where CartId= @CartId;
		EXEC USP_GetCartItems @CartCustomerId;		
	END
	ELSE IF(@CartQuantity < @CartProductCount)
	BEGIN	
		
		UPDATE Cart set CartQuantity = @CartQuantity WHERE CartId = @CartId;
		update Cart set CartPrice = ((SELECT P.ProductPrice from Product P JOIN Cart C on P.ProductId = C.CartProductId where C.CartId = @CartId) * (SELECT CartQuantity from Cart where CartId = @CartId))
		where CartId= @CartId;
		EXEC USP_GetCartItems @CartCustomerId;
	END
END
