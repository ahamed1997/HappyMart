CREATE TABLE [dbo].[ShippingAddress]
(
	Id varchar(10) primary key,
		CustomerId varchar (30),
		Mobile varchar(15),
		Street varchar(100),
		LandMark varchar(100),
		City varchar(30), 
		State varchar(30), 
		Zipcode varchar(10),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
)
