var db = require('../database')
var routs = require('../../server/routes');

module.exports= {
    
    // get all students
    getAll:(callback)=>{
        var queryStr = 'SELECT * FROM \
         students ';

        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },
    
    // create new student
    createstudent:(params,callback) =>{
        var queryStr = `insert into students(studentName,studentpassword,userType) values (?,?,?)`;
         db.query(queryStr,params,function(err,results){
             callback(err,results)
         });
    },
    
    // delete one student
    deleteOne:(params,callback) =>{
        var queryStr = ` SET FOREIGN_KEY_CHECKS=0;DELETE FROM students WHERE studentId = ? ;SET FOREIGN_KEY_CHECKS=1;`;
        db.query(queryStr,params,function(err,results){
           callback(err,results)
        });
    },

    // get one student by id
    getOne:(params,callback) =>{
        var queryStr = `select * from students  where studentId= ?`;
        db.query(queryStr,params,function(err,results){
            callback(err,results)
        });
    },

    // update one student by id
    updateOne: (params, callback) => {
        var queryStr = `update students set studentName = ?, studentpassword = ? , userType = ? where studentId = ?`;
        db.query(queryStr, params, function(err, results) {
            callback(err, results)
        });
    }

    
    };
