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
		Description nvarchar(MAX),
		Specification nvarchar(MAX),
		Options nvarchar(MAX),
		Price nvarchar(50) ,
		Brand varchar(50),
		IsActive int,
		ImageURL varchar(200),
		FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
);
GO