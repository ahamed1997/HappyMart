CREATE PROCEDURE [dbo].[USP_RemoveCartItems]
	@CartId INT,
	@CartCustomerId INT
AS
BEGIN
	DECLARE @CartCount INT, @returnRemovedCartId int;
	set @CartCustomerId = (Select @CartCustomerId from Cart where CartId = @CartId);
	set @returnRemovedCartId = @CartId;

	set @CartCount = (SELECT COUNT(*) from Cart);

	DELETE from Cart WHERE CartId = @CartId;

	while(@CartId <= @CartCount)
	BEGIN
	UPDATE Cart set CartId = @CartId WHERE CartId = @CartId+1;
	set @CartId = @CartId + 1;
	END
	EXEC USP_GetCartItems @CartCustomerId;
	
END