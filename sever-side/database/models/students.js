var db = require('../database')
var routs = require('../../server/routes');

module.exports= {
    getAll:(callback)=>{
        var queryStr = 'SELECT * FROM \
         students ';

        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },

    createstudent:(params,callback) =>{
        var queryStr = `insert into students(studentName,studentpassword,userType) values (?,?,?)`;
         db.query(queryStr,params,function(err,results){
             callback(err,results)
         });
    },
    


    deleteOne:(params,callback) =>{
        var queryStr = ` SET FOREIGN_KEY_CHECKS=0;DELETE FROM students WHERE studentId = ? ;SET FOREIGN_KEY_CHECKS=1;`;
        db.query(queryStr,params,function(err,results){
           callback(err,results)
        });
    },

    

    getOne:(params,callback) =>{
        var queryStr = `select * from students  where studentId= ?`;
        db.query(queryStr,params,function(err,results){
            callback(err,results)
        });
    },

    updateOne: (params, callback) => {
        var queryStr = `update students set studentName = ?, studentpassword = ? , userType = ? where studentId = ?`;
        db.query(queryStr, params, function(err, results) {
            callback(err, results)
        });
    }

    
    };