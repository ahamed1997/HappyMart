CREATE TABLE [dbo].[Payment]
(
	Id INT   primary key, 
	OrderId INT NOT NULL,
	FOREIGN KEY (OrderId) REFERENCES Orders(Id)
)
