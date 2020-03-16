CREATE TABLE Product
(
	Id INT   primary key,
	SubCategoryId INT NOT NULL,
	Name varchar(100) NOT NULL,
	Description nvarchar(1000) NOT NULL,
	Specification nvarchar(MAX) NOT NULL,
	Options nvarchar(MAX) NOT NULL,
	Price MONEY NOT NULL ,
	Brand varchar(50) NOT NULL,
	IsActive bit NOT NULL,
	Quantity int NOT NULL,
	ImageURL varchar(200) NOT NULL,
	FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
);