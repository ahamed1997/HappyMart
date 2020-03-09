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
create table Customer 
(
		Id varchar(30) primary key ,
		FirstName varchar(50), 
		LastName varchar(50),
		Mobile varchar(15),
		Email varchar(30),
		Password varchar(30),
		Street varchar(100),
		LandMark varchar(100),
		City varchar(30), 
		State varchar(30), 
		Zipcode varchar(10)
);

GO


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
create table Payment 
(
		Id varchar(30) primary key, 
		CustomerId varchar(30),
		PaymentMode varchar(20),
		AmountPaid varchar(20),
		DateOfPAyment datetime,
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id)
);
GO

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
create table Category 
(
		Id varchar(10) primary key,
		Categories varchar(50)
);
GO
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
create table SubCategory 
(
		Id varchar(30) primary key,
		CategoryId varchar(10),
		Name varchar(100),
		FOREIGN KEY (CategoryId) REFERENCES Category(Id)
);
GO
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
create table Product 
(
		Id varchar(50) primary key,
		SubCategoryId varchar(30),
		Name varchar(100),
		Description varchar(500),
		Specification varchar(600),
		Options varchar(400),
		Price nvarchar(50) ,
		Brand varchar(50),
		IsActive int,
		ImageURL varchar(200),
		FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
);
GO
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
create table Orders
(
		Id varchar(30) primary key,
		Quantity int,
		Price int,
		DateOrdered datetime,
		DateReceived datetime,
		Status varchar(20),
		CustomerId varchar (30),
		PaymentId varchar(30),
		ProductId varchar(50),
		AddressId varchar(10),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (PaymentId) REFERENCES Payment(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id),
		FOREIGN KEY (AddressId) REFERENCES ShippingAddress(Id)
);
GO
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
create table Cart
(
		Id varchar(10) primary key,
		CustomerId varchar (30),
		ProductId varchar(50),
		FOREIGN KEY (CustomerId) REFERENCES Customer(Id),
		FOREIGN KEY (ProductId) REFERENCES Product(Id)
);
GO
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
create table Stock 
(
		Id varchar(50),
		ProductId varchar(50),
		Quantity int,FOREIGN KEY (ProductId) REFERENCES Product(Id)
);
GO
