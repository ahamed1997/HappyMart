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
		Id varchar(10) primary key,
		SubCategoryId varchar(10),
		Name varchar(10),
		Description varchar(500),
		Specification varchar(600),
		Options varchar(400),
		Price int ,
		Brand varchar(50),
		IsActive int,
		ImageURL varchar(200),
		FOREIGN KEY (SubCategoryId) REFERENCES SubCategory(Id)
);
GO