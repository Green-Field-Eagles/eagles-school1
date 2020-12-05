CREATE DATABASE EAGLES1;
USE EAGLES1;

CREATE TABLE NOT EXISTS students
 (studentId INT(11)  AUTO_INCREMENT,
 studentName VARCHAR(30),
 studentpassword VARCHAR(50),
  PRIMARY KEY (studentId));


CREATE TABLE NOT EXISTS myAdmin
 (adminId INT(11)  AUTO_INCREMENT ,
  adminName VARCHAR(30),
  adminpassword VARCHAR(50),
  PRIMARY KEY (adminId));


CREATE TABLE NOT EXISTS userType
 (userId INT(11)  AUTO_INCREMENT,
 adminId INT(11)),
studentId INT(11)
PRIMARY KEY (userId),
FOREIGN KEY (studentId) REFERENCES students(studentId),
FOREIGN KEY (adminId) REFERENCES myAdmin(adminId)
);

CREATE TABLE NOT EXISTS subjects
 (subjectId INT(11)  AUTO_INCREMENT ,
 subjectName VARCHAR(30),
 FOREIGN KEY (studentId) REFERENCES students(studentId),
 PRIMARY KEY (subjectId));

CREATE TABLE NOT EXISTS marks
 (markId INT(11)  AUTO_INCREMENT ,
 mark INT(4),
 markType VARCHAR(30),
 FOREIGN KEY (studentId) REFERENCES students(studentId),
 PRIMARY KEY (markId));
