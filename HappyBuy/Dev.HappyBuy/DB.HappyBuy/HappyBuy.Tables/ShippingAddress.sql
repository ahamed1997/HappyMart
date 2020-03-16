CREATE TABLE [dbo].[ShippingAddress]
(
	Id INT   primary key,
		CustomerId INT NOT NULL,
		Mobile varchar(15) NOT NULL,
		Street varchar(100) NOT NULL,
		LandMark varchar(100) NOT NULL,
		City varchar(30) NOT NULL, 
		State varchar(30) NOT NULL, 
		Zipcode varchar(10) NOT NULL,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
)
