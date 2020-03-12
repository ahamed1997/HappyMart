CREATE TABLE [dbo].[SubCategory]
(
	Id varchar(30) primary key,
		CategoryId varchar(10),
		Name varchar(100),
		FOREIGN KEY (CategoryId) REFERENCES Category(Id)
)
