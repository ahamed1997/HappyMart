CREATE PROCEDURE [dbo].[USP_AddSpecification]
	@SpecificationProductId int,
	@SpecificationName varchar(30),
	@SpecificationValue varchar(300)
AS
BEGIN
	declare @id INT;
	set @id = (SELECT COUNT(*) from Specification)+1;
	INSERT INTO Specification values (@id, @SpecificationProductId, @SpecificationName, @SpecificationValue);
	SELECT @id;
END
