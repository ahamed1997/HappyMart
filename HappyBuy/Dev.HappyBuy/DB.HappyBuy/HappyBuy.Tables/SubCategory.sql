CREATE TABLE SubCategory
(
	SubCategoryId INT primary key,
	SubCategoryCategoryId INT NOT NULL,
	SubCategoryName varchar(100) NOT NULL,
	FOREIGN KEY (SubCategoryCategoryId) REFERENCES Category(CategoryId)
);
