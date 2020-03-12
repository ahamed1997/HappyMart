CREATE TABLE [dbo].[Stock]
(
	Id varchar(50),
		ProductId varchar(50),
		Quantity int,FOREIGN KEY (ProductId) REFERENCES Product(Id)
)
