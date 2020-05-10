CREATE PROCEDURE [dbo].[USP_UpdateSpecification]
	@SpecificationId INT,
	@SpecificationProductId int,
	@SpecificationName varchar(30),
	@SpecificationValue varchar(300)
AS
BEGIN
	update Specification 
		set  
		SpecificationId = @SpecificationId, 
		SpecificationName = @SpecificationName, 
		SpecificationValue = @SpecificationValue 
		where 
	SpecificationId = @SpecificationId;
	select @SpecificationId;
END
