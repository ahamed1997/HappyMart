CREATE TABLE [dbo].[Customer]
(
	Id INT   primary key ,
		FirstName varchar(50) NOT NULL, 
		LastName varchar(50)  NULL,
		Mobile varchar(15) NOT NULL,
		Email nvarchar(30)  NOT NULL ,
		Password varchar(30) NOT NULL,
		Street varchar(100) NOT NULL,
		LandMark varchar(100) NOT NULL,
		City varchar(30) NOT NULL, 
		State varchar(30) NOT NULL, 
		Zipcode CHAR(6) NOT NULL,
		CONSTRAINT Uk_Email unique(Email)
)
