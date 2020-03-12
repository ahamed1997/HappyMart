CREATE TABLE [dbo].[Customer]
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
)
