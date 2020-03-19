CREATE PROCEDURE [dbo].[USP_UpdateCartQuantity]
	@Id INT,
	@Quantity INT
AS
BEGIN
	DECLARE @CartProductCount INT,@StockCount INT,@CartCount INT;
	set @CartProductCount = (SELECT Quantity from Cart WHERE Id = @Id);
	set @StockCount = (SELECT P.Quantity from Product P JOIN Cart C on P.Id = C.ProductId  where C.Id  = @Id);


	IF(@CartProductCount = @StockCount)
	BEGIN
		RETURN @CartProductCount;
	END

	IF(@Quantity > @CartProductCount)
	BEGIN
		UPDATE Cart set Quantity = Quantity + 1 WHERE Id = @Id;
		UPDATE Cart set Price = 
		(SELECT P.Price from Product P JOIN Cart C on P.Id = C.ProductId where C.Id = @Id) * 
		(SELECT Quantity from Cart where Id = @Id);
		SELECT Quantity from Cart WHERE Id = @Id;
	END

	IF(@Quantity < @CartProductCount)
	BEGIN
		IF((SELECT Quantity from Cart WHERE Id = @Id)=1)
		DELETE FROM Cart WHERE Id = @Id;
		set @CartProductCount = @Id;
		set @CartCount = (SELECT COUNT(*) from Cart)
		WHILE(@CartProductCount <= @CartCount)
			BEGIN
				UPDATE Cart set Id = @CartProductCount WHERE Id = @CartProductCount +1;
				set @CartProductCount = @CartProductCount +1;
			END
		RETURN 0
		END
		ELSE IF((SELECT Quantity from Cart WHERE Id = @Id)>1)
		BEGIN
			UPDATE Cart set Quantity = Quantity - 1 WHERE Id = @Id;
			SELECT Quantity from Cart WHERE Id = @Id;
		END
	END


RETURN 0
