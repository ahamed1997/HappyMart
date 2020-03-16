CREATE TABLE SubCategory
(
	Id INT primary key,
	CategoryId INT NOT NULL,
	Name varchar(100) NOT NULL,
	FOREIGN KEY (CategoryId) REFERENCES Category(Id)
);
