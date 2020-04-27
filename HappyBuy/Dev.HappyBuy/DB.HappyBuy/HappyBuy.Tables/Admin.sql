create table Admin (
AdminId INT PRIMARY KEY NOT NULL,
AdminFirstName varchar(30) NOT NULL, 
AdminLastName varchar(30) NOT NULL,
AdminMobile varchar(15) NOT NULL,
AdminEmail nvarchar(40) NOT NULL,
AdminPassword varbinary(1000) NOT NULL)
