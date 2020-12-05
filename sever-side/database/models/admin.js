var db = require('../database')
var routs = require('../../server/routes');

//controller for methods at admin 
module.exports= {

    //retreive all data about admin
    getAlladmin:(callback)=>{
        var queryStr = `SELECT * FROM \
         myAdmin `;

        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },
    
    //create new admin
    createadmin:(params,callback) =>{
        var queryStr = `insert into myAdmin(adminName,adminpassword,userType) values (?,?,?)`;
         db.query(queryStr,params,function(err,results){
             callback(err,results)
         });
    },

    //delete one admin

    deleteOneadmin:(params,callback) =>{
        var queryStr = `delete from myAdmin where adminId= ?`;
        db.query(queryStr,params,function(err,results){
           callback(err,results)
        });
    },
    

    //retrieve one 
    getOneadmin:(params,callback) =>{
        var queryStr = `select * from myAdmin  where adminId= ?`;
        db.query(queryStr,params,function(err,results){
            callback(err,results)
        });
    },

    updateOneadmin: (params, callback) => {
        var queryStr = ` UPDATE myAdmin SET adminName=?, adminpassword=? WHERE adminId=?`;
        db.query(queryStr, params, function(err, results) {
            callback(err, results)
        });

    }



};
