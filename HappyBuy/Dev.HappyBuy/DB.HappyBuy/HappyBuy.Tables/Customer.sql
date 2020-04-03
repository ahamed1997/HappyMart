CREATE TABLE [dbo].[Customer]
(
		CustomerId INT   primary key ,
		CustomerFirstName varchar(50) NOT NULL, 
		CustomerLastName varchar(50)  NULL,
		CustomerMobile varchar(15) NOT NULL,
		CustomerEmail nvarchar(30)  NOT NULL ,
		CustomerPassword VARBINARY(1000) NOT NULL,
		CONSTRAINT Uk_Email unique(CustomerEmail)
)
