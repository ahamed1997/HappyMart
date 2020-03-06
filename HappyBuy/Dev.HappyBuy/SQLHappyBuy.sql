
/* Create few records in this table */
INSERT INTO NAMES VALUES(135,'Tom');
INSERT INTO NAMES VALUES(222,'Lucy');
INSERT INTO NAMES VALUES(3333,'Frank');
INSERT INTO NAMES VALUES(444444444,'Jane');
INSERT INTO NAMES VALUES(5,'Robert');
COMMIT;

/* Display all the records from the table */
SELECT RIGHT('M'+ '0000'+CONVERT(VARCHAR,Id),6) AS Id FROM NAMES;

SELECT RIGHT('0' + CAST(Id AS VARCHAR(2)), 2) FROM NAMES
declare @No int, @null int,@Id varchar(10),@SNo2 int;
set @null =0;
select @No = (select count(*) from NAMES);
select format(@No,'0000')
select @SNo2 = @No 
print @SNo2
set @null = (select FORMAT(@No,'000'))
print @null
INSERT INTO NAMES VALUES(FORMAT(@No,'000') ,'Inserted');
select * from NAMES

select CAST('2' AS VARCHAR(2))
select identity(0000,1)
select (cast 'P' + left(@id varchar(20),3))

create table tblTest (Sno varchar(10),name varchar(10))
drop table tblTest

alter proc proc_Test(@name varchar(10))
as
begin
declare @null int,@id varchar(10);
set @null = (select count(*) from tblTest)+1
set @id = 'S' + (FORMAT(@null,'0000'))
insert into tblTest values(@id, @name)
end
select * from tblTest

exec proc_Test 'sd'
select * from tblTest
insert into tblTest QuestionNo as 'Q'+Cast(QuestionID as Varchar(10),

CREATE TABLE Questions(
  QuestionID int IDENTITY NOT NULL, 
  QuestionNo as 'Q'+Cast(QuestionID as Varchar(10)) PERSISTED PRIMARY KEY, 
  Question Varchar(200))
  sp_help Questions

drop table NAMES

CREATE TABLE NAMES(Id VARCHAR(10), Name text);







DECLARE @YourNumber INT=123;
SELECT REPLACE(STR(@YourNumber,5),' ', '0') 

DECLARE @YourNumber INT=123;
SELECT REPLACE(STR(@YourNumber,5),' ', '0')   --pad to five digits
      ,REPLACE(STR(@YourNumber,3),' ', '0')   --pad to 3 digits
      ,REPLACE(STR(@YourNumber,2),' ', '0');