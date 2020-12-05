const mysql = require('mysql');



//create connection//////
const db = mysql.createConnection({
    // port : '3307',
    host:  '127.0.0.1',
    user : 'root',
    password : '',
    multipleStatements : 'true',

});




//Connect Mysql and create database

db.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");
    db.query("CREATE DATABASE IF NOT EXISTS EAGELS" , function(err , result ){
          if(err) throw err;
          console.log("Database created");
     })
    db.query("USE EAGELS" , function(err , result ){
           if(err) throw err;
           console.log("used EAGELS");
    })


    let students = `CREATE TABLE IF NOT EXISTS students
                    (studentId INT(10) NOT NULL AUTO_INCREMENT ,
                    studentName VARCHAR(30) NOT NULL,
                    studentpassword VARCHAR(50) NOT NULL,
                    PRIMARY KEY (studentId) 
                    );`;

    db.query(students, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
    });

    

    let myAdmin = `CREATE TABLE IF NOT EXISTS myAdmin
    (adminId INT(10) NOT NULL AUTO_INCREMENT,
     adminName VARCHAR(30) NOT NULL,
     adminpassword VARCHAR(50) NOT NULL,
     PRIMARY KEY (adminId)
     );`;

    db.query(myAdmin, function(err, results, fields) {
    if (err) {
    console.log(err.message);
    }
    });

    let userType = `CREATE TABLE IF NOT EXISTS userType
                    (userId INT(10) AUTO_INCREMENT NOT NULL AUTO_INCREMENT,
                    admin_Id INT(10),
                    student_Id INT(10), 
                    userType VARCHAR(30),
                    PRIMARY KEY (userId)

   );`;

    db.query(userType, function(err, results) {
    if (err) {
    console.log(err.message);
    }
    });

    

    
    let subjects = `CREATE TABLE IF NOT EXISTS subjects
    (
    subjectId INT(10) AUTO_INCREMENT NOT NULL AUTO_INCREMENT,
    subjectName VARCHAR(30),
    student_Id INT(10),
    PRIMARY KEY (subjectId)
 
    );`;

    db.query(subjects, function(err, results) {
    if (err) {
    console.log(err.message);
    }
    });


    


    let marks = `CREATE TABLE IF NOT EXISTS marks
    (
    markId INT(10)  AUTO_INCREMENT ,
    mark INT(4),
    student_Id INT(10),
    markType VARCHAR(30),
    PRIMARY KEY (markId)
    );`;

    db.query(marks, function(err, results) {
    if (err) {
    console.log(err.message);
    }
    });

    // db.end(function(err) {
    //     if (err) {
    //       return console.log(err.message);
    //     }
    //   });



});


module.exports = db;