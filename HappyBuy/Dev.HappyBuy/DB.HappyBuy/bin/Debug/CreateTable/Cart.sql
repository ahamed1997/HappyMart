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
create table Cart
(
		Id varchar(10) primary key,
		CustomerId varchar (10),
		ProductId varchar(10),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id)
);
Go