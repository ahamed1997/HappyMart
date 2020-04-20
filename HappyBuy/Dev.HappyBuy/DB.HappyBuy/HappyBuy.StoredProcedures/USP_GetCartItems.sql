CREATE PROCEDURE [dbo].[USP_GetCartItems]
	@CartCustomerId INT

AS
	BEGIN
		SELECT 
		C.CartId,
		C.CartPrice,
		C.CartQuantity,
		C.CartCustomerId,
		C.CartProductId,
		P.ProductId,
		P.ProductName,
		P.ProductBrand,
		P.ProductDescription,
		P.ProductSpecification,
		P.ProductImageURL,
		P.ProductIsActive,
		P.ProductOptions,
		P.ProductPrice,
		P.ProductQuantity,
		P.ProductSubCategoryId
		from Cart C JOIN Product P on P.ProductId = C.CartProductId 
		WHERE  CartCustomerId = @CartCustomerId;
END