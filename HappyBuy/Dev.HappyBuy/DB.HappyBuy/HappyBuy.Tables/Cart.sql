CREATE TABLE Cart
(
	CartId INT primary key,
	CartCustomerId INT   NOT NULL,
	CartProductId INT NOT NULL,
	CartPrice DECIMAL(10,2) NOT NULL,
	CartQuantity int NOT NULL,
	FOREIGN KEY (CartCustomerId) REFERENCES Customer(CustomerId),
	FOREIGN KEY (CartProductId) REFERENCES Product(ProductId)
);