CREATE PROCEDURE [dbo].[USP_RemoveCartItems]
	@Id INT
AS
BEGIN
	DECLARE @CartCount INT;

	set @CartCount = (SELECT COUNT(*) from Cart);

	DELETE from Cart WHERE Id = @Id;

	while(@Id <= @CartCount)
	BEGIN
	UPDATE Cart set Id = @Id WHERE Id = @Id+1;
	set @Id = @Id + 1;
	END

END
