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
create table Payment 
(
		Id varchar(30) primary key, 
		CustomerId varchar(30),
		PaymentMode varchar(20),
		AmountPaid varchar(20),
		DateOfPAyment datetime,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
);
Go
