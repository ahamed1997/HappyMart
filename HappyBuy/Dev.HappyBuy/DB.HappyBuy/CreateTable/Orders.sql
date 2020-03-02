/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
Go
create table Orders
(
		Id varchar(10) primary key,
		Quantity int,
		Price int,
		DateOrdered datetime,
		DateReceived datetime,
		Status varchar(20),
		CustomerId varchar (10),
		PaymentId varchar(10),
		ProductId varchar(10),
		AddressId varchar(10),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (PaymentId) REFERENCES Payment(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id),
		FOREIGN KEY (AddressId) REFERENCES ShippingAddress(Id)
);
Go