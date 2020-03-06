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
GO
create table ShippingAddress
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
);
GO
