create Table file(id Int AUTO_INCREMENT Not Null Primary Key, file_name Varchar(30), file_data LONGBLOB Not Null, created_by Varchar(20) Not Null, created_on Datetime Not Null);

create table user (id int AUTO_INCREMENT primary key, name varchar(60), date varchar(30), country varchar(25),ile_name Varchar(30), file_data LONGBLOB Not Null);


insert into user (name, date, file) values ('akshat', '24/10/1998', 'file')


