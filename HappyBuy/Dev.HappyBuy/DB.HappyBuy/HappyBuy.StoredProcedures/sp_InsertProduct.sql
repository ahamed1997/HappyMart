CREATE PROCEDURE [dbo].[sp_InsertProduct]
	@SubCategoryName varchar(50),
	@Name varchar(100),
	@Description nvarchar(MAX),
	@Specification nvarchar(MAX),
	@Options nvarchar(MAX),
	@Price nvarchar(50),
	@Brand varchar(50),
	@IsActive int,
	@Quantity int,
	@ImageURL varchar(200)

AS
BEGIN
	DECLARE @money money = @Price, @TempSubCategoryId varchar(30),@Id varchar(50),
	@StockId varchar(50),@Count int, @TempPrice nvarchar(50),@ProductCount int
	set @TempSubCategoryId = (SELECT Id from SubCategory WHERE Name = @SubCategoryName)
	set @Count = (SELECT count(*) from Product)+1;
	set @Id = 'P' + @TempSubCategoryId + 'SC' + (FORMAT(@Count,'00000'));
	set @ProductCount = (SELECT count(1) from Product WHERE Id = @Id)
	set @Count = (SELECT count(*) from Stock)+1;
	set @StockId = 'SK' + (FORMAT(@Count,'00000'));

	IF(@ProductCount > 0)
	BEGIN
		set @TempPrice = (SELECT FORMAT ( @money,'C', 'ta-IN'));
		INSERT into Product values (@Id,@TempSubCategoryId,@Name,@Description,@Specification,@Options,@TempPrice,@Brand,@IsActive,@Quantity,@ImageURL);
		INSERT into Stock values (@StockId,@Id,@Quantity);
	END
	ELSE 
	BEGIN
		set @TempPrice = (SELECT FORMAT ( @money,'C', 'ta-IN'));
		UPDATE Product 
		set SubCategoryId = @TempSubCategoryId,
			Name = @Name,
			Description = @Description,
			Specification = @Specification,
			Options = @Options,
			Price = @TempPrice,
			Brand =@Brand,
			IsActive = @IsActive,
			Quantity=@Quantity,
			ImageURL= @ImageURL
		WHERE Id = @Id;

		UPDATE Stock
		set ProductId = @Id,
			Quantity = @Quantity
		WHERE 
			Id = @StockId;
	END
END