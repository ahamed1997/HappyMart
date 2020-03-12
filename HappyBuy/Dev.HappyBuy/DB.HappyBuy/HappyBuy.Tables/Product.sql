CREATE TABLE [dbo].[Product]
(
	Id varchar(50) primary key,
		SubCategoryId varchar(30),
		Name varchar(100),
		Description nvarchar(MAX),
		Specification nvarchar(MAX),
		Options nvarchar(MAX),
		Price nvarchar(50) ,
		Brand varchar(50),
		IsActive int,
		Quantity int,
		ImageURL varchar(200),
		FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
)
