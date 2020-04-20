create table Specification 
(
	SpecificationId INT NOT NULL PRIMARY KEY,
	SpecificationProductId INT NOT NULL,
	SpecificationName VARCHAR(30) NOT NULL,
	SpecificationValue VARCHAR(300) NOT NULL,
	FOREIGN KEY ([SpecificationProductId]) REFERENCES [dbo].[Product] ([ProductId])
)
