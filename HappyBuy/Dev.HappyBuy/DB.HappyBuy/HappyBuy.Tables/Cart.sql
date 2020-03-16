CREATE TABLE Cart
(
	Id INT primary key,
	CustomerId INT   NOT NULL,
	ProductId INT NOT NULL,
	Price DECIMAL(10,2) NOT NULL,
	Quantity int NOT NULL,
	FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
	FOREIGN KEY (ProductId) REFERENCES Product(Id)
);