CREATE PROCEDURE [dbo].[USP_InsertProductSpecification]
	@SpecificationProductId INT,
		@SpecificationName varchar(30),
		@SpecificationValue varchar(300)
AS
BEGIN
	DECLARE @Id INT;
	set @Id = (SELECT count(*) from Specification)+1;
	INSERT into Specification values(@Id,@SpecificationProductId,@SpecificationName,@SpecificationValue);
	SELECT MAX(SpecificationId) from Specification;
END