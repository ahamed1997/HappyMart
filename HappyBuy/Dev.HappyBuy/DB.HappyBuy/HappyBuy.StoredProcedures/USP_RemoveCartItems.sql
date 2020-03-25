CREATE PROCEDURE [dbo].[USP_RemoveCartItems]
	@CartId INT
AS
BEGIN
	DECLARE @CartCount INT;

	set @CartCount = (SELECT COUNT(*) from Cart);

	DELETE from Cart WHERE CartId = @CartId;

	while(@CartId <= @CartCount)
	BEGIN
	UPDATE Cart set CartId = @CartId WHERE CartId = @CartId+1;
	set @CartId = @CartId + 1;
	END

END
