CREATE PROCEDURE [dbo].[USP_GetCartItems]
	@CustomerId INT
AS
	BEGIN
		SELECT 
		C.Id,
		C.Price,
		C.Quantity,
		C.CustomerId,
		C.ProductId,
		P.Id,
		P.Name,
		P.Brand,
		P.Description,
		P.Specification,
		P.ImageURL,
		P.IsActive,
		P.Options,
		P.Price,
		P.Quantity,
		P.SubCategoryId
		from Cart C JOIN Product P on P.Id = C.ProductId 
		WHERE C.ProductId in (SELECT ProductId from Cart 
		where CustomerId = @CustomerId);
END