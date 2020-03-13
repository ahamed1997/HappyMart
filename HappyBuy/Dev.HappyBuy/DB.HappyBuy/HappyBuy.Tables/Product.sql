CREATE TABLE Product
(
	Id INT primary key,
		SubCategoryId INT NOT NULL,
		Name varchar(100) NOT NULL,
		Description nvarchar(MAX) NOT NULL,
		Specification nvarchar(MAX) NOT NULL,
		Options nvarchar(MAX) NOT NULL,
		Price DECIMAL(10,2) NOT NULL ,
		Brand varchar(50) NOT NULL,
		IsActive bit NOT NULL,
		Quantity int NOT NULL,
		ImageURL varchar(200) NOT NULL,
		FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
);