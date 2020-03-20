CREATE TABLE Product
(
	ProductId INT   primary key,
	ProductSubCategoryId INT NOT NULL,
	ProductName varchar(100) NOT NULL,
	ProductDescription nvarchar(1000) NOT NULL,
	ProductSpecification nvarchar(MAX) NOT NULL,
	ProductOptions nvarchar(MAX) NOT NULL,
	ProductPrice DECIMAL(10,2) NOT NULL ,
	ProductBrand varchar(50) NOT NULL,
	ProductIsActive bit NOT NULL,
	ProductQuantity int NOT NULL,
	ProductImageURL varchar(200) NOT NULL,
	FOREIGN KEY (ProductSubCategoryId) REFERENCES SubCategory(SubCategoryId)
);