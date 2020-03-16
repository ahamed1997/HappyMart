
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