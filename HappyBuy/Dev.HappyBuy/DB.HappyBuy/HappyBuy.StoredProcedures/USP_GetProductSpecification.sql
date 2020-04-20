CREATE PROCEDURE [dbo].[USP_GetProductSpecification]
	@SpecificationProductId INT
AS
BEGIN
	SELECT SpecificationId,SpecificationProductId,SpecificationName,SpecificationValue from Specification where SpecificationProductId = @SpecificationProductId;
END