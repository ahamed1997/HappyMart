CREATE PROCEDURE [dbo].[USP_DeleteSpecification]
  @SpecificationProductId INT,
  @SpecificationId INT
  AS
  BEGIN
declare @Count INT;
set @Count = (SELECT COUNT(*) from Specification where SpecificationProductId = @SpecificationProductId);
IF(@Count > 1)
	BEGIN
		delete from Specification where SpecificationId = @SpecificationId;
		set @Count = (SELECT COUNT(*) from Specification)
		WHILE(@SpecificationId <= @Count)
		BEGIN
		update Specification set SpecificationId = @SpecificationId where SpecificationId = @SpecificationId+1;
		set @SpecificationId = @SpecificationId+1;
		END
	END
		EXEC USP_GetProductSpecification @SpecificationProductId;
END

