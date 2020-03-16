CREATE PROCEDURE [dbo].[USP_InsertOrderStatusTable]
	@Status varchar(20)
AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT COUNT(*) from OrderStatus)+1;
	INSERT into OrderStatus values (@Id,@Status);
END
