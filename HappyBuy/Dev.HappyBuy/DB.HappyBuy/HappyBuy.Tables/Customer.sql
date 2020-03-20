CREATE TABLE [dbo].[Customer]
(
		CustomerId INT   primary key ,
		CustomerFirstName varchar(50) NOT NULL, 
		CustomerLastName varchar(50)  NULL,
		CustomerMobile varchar(15) NOT NULL,
		CustomerEmail nvarchar(30)  NOT NULL ,
		CustomerPassword varchar(30) NOT NULL,
		CustomerStreet varchar(100) NOT NULL,
		CustomerLandMark varchar(100) NOT NULL,
		CustomerCity varchar(30) NOT NULL, 
		CustomerState varchar(30) NOT NULL, 
		CustomerZipcode CHAR(6) NOT NULL,
		CONSTRAINT Uk_Email unique(CustomerEmail)
)
