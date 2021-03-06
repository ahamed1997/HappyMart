﻿
/* Create few records in this table */
INSERT INTO NAMES VALUES(135,'Tom');
INSERT INTO NAMES VALUES(222,'Lucy');
INSERT INTO NAMES VALUES(3333,'Frank');
INSERT INTO NAMES VALUES(444444444,'Jane');
INSERT INTO NAMES VALUES(5,'Robert');
COMMIT;
SELECT FORMAT(12687634, 'C2') Result;

SELECT FORMAT(CAST(250233870 AS MONEY),'N','en-in')

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

drop table tblTest
create table tblTest (Sno varchar(30),name varchar(10),pric nvarchar(100))

create proc pTest (@name varchar(10),@temp varchar(10),@pric nvarchar(100))
as
begin
declare @null int,@id varchar(30),@tprice nvarchar(100);
set @null = (select count(*) from tblTest)+1
set @id =  'S' + (FORMAT(@null,'00000'))
set @id = @temp + @id;
set @tprice = (SELECT FORMAT(CAST(@pric AS MONEY),'N','en-in'))
insert into tblTest values(@id, @name,@tprice)
end

exec pTest 'sde','CT002','382389'

select * from tblTest

alter proc prupdate(@pric int)
as 
begin
declare @tpric int,@ttpric nvarchar(100)
set @ttpric = (select pric from tblTest where name ='sde')
print @ttpric
set @tpric = (SELECT CAST (@ttpric AS INT));
print @tpric
set @tpric = @tpric + @pric;
print @tpric
update tblTest set pric = (SELECT FORMAT(CAST(@tpric AS MONEY),'N','en-in')) where name = 'sde'
end 
exec  prupdate 12.5023
select * from tblTest


drop table tblTest
create table tblTest (Sno varchar(30),name varchar(10),price nvarchar(50))
alter proc proc_knwkb(@name varchar(10), @price nvarchar(50))
as
begin
	declare @numberprice int,@id varchar(30),@varcharprice nvarchar(50)
	set @varcharprice = (SELECT FORMAT(CAST(@price AS MONEY),'N','en-in'))
	set @varcharprice = CONVERT(nvarchar(100),@varcharprice)
	insert into tblTest values('01',@name,@varcharprice)
end
exec proc_knwkb 'first','1233'
select * from tblTest


alter proc proc_knwkbss(@price nvarchar(50))
as
begin
	declare @tointprice int,@id varchar(30),@getvarcharprice nvarchar(50)
	
	set @getvarcharprice = (select price from tblTest where name ='first')
	print @getvarcharprice

	SELECT CONVERT(float, REPLACE('22,2.3', ',', '.')) AS Res
end
exec proc_knwkbss '1233'
select * from tblTest

SELECT * FROM Products
WHERE price > CAST(@pricemin as int) AND price < CAST(@pricemax as int)

drop table tblTest
create table tblTest (price nvarchar(50),numberprice int,updatednvarchar nvarchar(50))
alter proc procNvarchar(@priceint nvarchar(50))
as
begin
DECLARE @money money = @priceint, @price int,@tempmoneyvalue nvarchar(50),@updatedNvarchar nvarchar(50);
set @tempmoneyvalue = (SELECT FORMAT ( @money,'C', 'ta-IN') AS MyMoney)
set @price = (select cast(@money as int));
print @tempmoneyvalue;
print @price;
set @price = @price+123;
print @price;
set @updatedNvarchar = (select FORMAT(@price,'C','ta-IN'));

--insert into tblTest(@money,@price);
insert into tblTest values (@tempmoneyvalue,@price,@updatedNvarchar);
end
exec procNvarchar '123'
select * from tblTest
declare @val int
set @val = 3;
set @val = @val * 3;
print @val;


-------------------------------------------------------
drop table tblTest
create table tblTest (jSONoBJECT nvarchar(MAX))
DECLARE @json NVARCHAR(MAX);
SET @json = '{"info": {"address": [{"town": "Belgrade"}, {"town": "Paris"}, {"town":"Madrid"}]}}';
INSERT INTO tblTest values(@json)
SET @json = JSON_MODIFY(@json, '$.info.address[1].town', 'London');
SELECT modifiedJson = @json;
INSERT INTO tblTest values(@json)
select * from tblTest


declare @temp money
set @temp  = 5.0 * 2;
print @temp
declare @Existingdate datetime
Set @Existingdate=GETDATE()
PRINT @Existingdate
Select CONVERT(varchar,GETDATE(),103) as [DD/MM/YYYY]
------------------------------------------------------------------------
----------PREVIOUS QUERIES----
create table CITY (ID int, Name varchar(17),CountryCode varchar(3),District varchar(20),Population int)


insert into CITY (ID,Name,CountryCode,District,Population) values
(1, 'America' ,'USA','Austin',120000),
(2, 'America' ,'USA','Chicago',10000),
(3, 'America' ,'USA','San Francisco',3000000),
(4, 'America' ,'USA','Newyork',120000),
(5, 'India' ,'IN','Erode',120000),
(6,'Japan','JP','Tokyo',120000),
(7,'Japan','JP','Hiroshima',120000)

---Query 1 .Query all columns for all american city with populations larger than 100000.The country code for America is 'USA'

select * from CITY where CountryCode ='USA' AND Population>100000

----Query 2 Query the names of all American cities in city with populations larger than 120000. The country code for America is 'USA'

select District from CITY where CountryCode ='USA' AND Population>120000

---Query 3 all attributes of every japanese city in the city table .

select * from CITY where Name ='Japan'

--- Query 4

create table Station (Id int, City varchar(21),State varchar(2), LAT_N int,Long_W int)

insert into Station values 
(1,'Chennai','TN',12.3,23.4),
(2,'Salem','TN',23.4,23.4),
(3,'Coimbatore','TN',52.3,23.4),
(4,'Madurai','TN',72.3,23.4),
(5,'Erode','TN',92.3,23.4),
(6,'Thrichy','TN',22.3,23.4),
(7,'Thrichy','TN',22.3,23.4)

select Distinct * from Station where Id %2 = 0


--Query 5

select  COUNT(Distinct City), COUNT(*)  from Station 


---20-03-2020 Queries

--Query 1
SELECT value FROM STRING_SPLIT('S,Q,L,S,E,R,V,E,R', ',');

--Query 2
Select E.EmployeeName,M.EmployeeName from Employee E , Manager M where E.Id = M.ManagerId

--Query 3
DECLARE @var int                 
SELECT @var = 1                   
WHILE @var <= 3                   
BEGIN                           
PRINT replicate('* ', @var)       
SET @var = @var + 1              
END 


--Query 4 

DECLARE @num int;
set @num = 1;
WHILE(@num <=100)
BEGIN
PRINT (@num)
SET @num = @num+1;
END

--Query 5

SELECT Name, COUNT(*) FROM tblStudent GROUP BY  Name HAVING  COUNT(*) > 1;

--Query 1
select  DeptName from EmptDept join Employee on Department = DeptId where EmpId>103;

--Query 2
select EmpName from Employee where EmpHeadId = (select EmpHeadId from Employee where EmpName = 'Abishek');

--Query 3

select EmpName from Employee join EmptDept on DeptHead = Empid where DeptName = 'HR';

--Query 4

select EmpName from Employee  E join EmpSalary ES on ES.EmpId = E.EmpHeadId where IsPermenant = 'Yes' ;

--Query 5

select  EmpName, EmailId from Employee E join EmpDept ED on E.Empid = ED.DeptHead join EmpSalary ES on ED.DeptHead = ES.EmpId where IsPermanent = 'Yes';

--Query 6

select * from Empoyee join EmpDept on Department = DeptId where Dept_off = 'Monday';




--Query 1

select CODE, COLLEGE_NAME, UNIVERSITY_NAME, CITY, STATE,YEAR_OPENED, DEPTARTMENT_NAME, HOD_NAME from COLLEGE C inner join EMPLOYEE E on 
E.COLLEGE_ID = C.ID inner join DESIGNATION D on E.DESIG_ID = D.ID where D.NAME = 'HOD';

--Query 2

select ROLL_NUMBER, NAME, GENDER, DOB, EMAIL, PHONE, ADDRESS,COLLEGE_NAME, DEPARTMENT_NAME FROM STUDENT S INNER JOIN COLLEGE C on S.COLLEGE_ID = C.ID 
JOIN UNVERSITY U on U.ID = C.UNIV_CODE JOIN COLLEGE_DEPARTMENT CD on CD.COLLEGE_ID = C.ID JOIN DEPARTMENT on UDEPT_CODE = DEPT_CODE where U.UNIVERSITY_NAME = 'A.K. COLLEGE ' AND C.CITY = 'CHENNAI';

--Query 3

select ROLL_NUMBER, NAME, GENDER, DOB, EMAIL, PHONE, ADDRESS,COLLEGE_NAME, DEPARTMENT_NAME, HOD_NAME FROM STUDENT S INNER JOIN COLLEGE C on S.COLLEGE_ID = C.ID 
JOIN UNVERSITY U on U.ID = C.UNIV_CODE  JOIN COLLEGE_DEPARTMENT CD on CD.COLLEGE_ID = C.ID JOIN DEPARTMENT on UDEPT_CODE = DEPT_CODE join EMPLOYEE E on E.CDEPT_ID = CD.CDEPT_ID join DESIGNATION D on
E.DESIGN_ID = D.ID  where U.UNIVERSITY_NAME = 'A.K. COLLEGE ' AND C.CITY = 'CHENNAI' LIMIT  20 OFFSET 20

--Query 4


select * from EMPLOYEE E JOIN COLLEGE C ON C.ID  = E.COLLEGE_ID JOIN COLLEGE_DEPARTMENT CD ON CD.CDEPT_ID = E.CDEPT_ID JOIN DEPARTMNET D ON D.DEPT_CODE = CD.UDEPT_CODE ORDER BY D.RANK ASC

--Query 5

select * from STUDENT JOIN SEMESTER_RESULT SR ON SR.STUDENT_ID = S.ID where CREDITS > 8 AND SEMESTER  = 4;

--Query 6 

select * from STUDENT JOIN SEMESTER_RESULT SR ON SR.STUDENT_ID = S.ID where CREDITS > 5 and SEMESTER = 3;
 
--Query 7

select C.NAME,SF.PAID_STATUS from COLLEGE C JOIN STUDENT ON S.COLLEGE_ID = C.ID JOIN STUDENTS_FEE SF ON SF.CDEPT_ID = CD.CDEPT_ID WHERE S.ACADEMIC_YEAR= 2018 GROUP BY SF.PAID_STATUS 

--Query 8

select C.NAME,SF.PAID_STATUS from COLLEGE C JOIN STUDENT ON S.COLLEGE_ID = C.ID JOIN STUDENTS_FEE SF ON SF.CDEPT_ID = CD.CDEPT_ID WHERE S.ACADEMIC_YEAR= 2018 AND SF.PAID_STATUS = 'PAID'

