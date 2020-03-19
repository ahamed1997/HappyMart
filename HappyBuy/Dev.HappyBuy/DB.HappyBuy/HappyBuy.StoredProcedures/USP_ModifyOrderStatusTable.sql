CREATE PROCEDURE [dbo].[USP_ModifyOrderStatusTable]
	@Id INT,
	@Status varchar(20)

AS
BEGIN
	UPDATE OrderStatus set Status = @Status where Id = @Id;
	SELECT Id from OrderStatus where Id = @Id;
END
