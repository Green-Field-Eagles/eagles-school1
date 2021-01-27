var models = require('../models/students');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')

  
//controllers for each method

module.exports = {
 // get all data from student

    getAll:(req,res) =>{
        models.getAll(function(err,results){
           
           if (err) { console.log('error in student controller',err)}
           res.json(results);
       
        })
       },

  //Create new student
  createstudent: function (req, res) {
          
    var params =[req.body.studentName,req.body.studentpassword,req.body.userType];
    console.log(req.body.studentName,"createstudent")
    models.createstudent(params, function(err, results) {
      if (err) { console.log("error post at student controller",err) }
      res.sendStatus(200)
      
    });
  },
       
    //Delete one student
      deleteOne: function(req,res){

        var params = [req.params.id];
        models.deleteOne(params,function(err,results){
            if(err){
                console.log("error delete at student controller",err)
            }
            res.send('student deleted')
        })



      },
    
      //retrieve one student
      getOne : function(req,res){
        var params = [req.params.id];
        models.getOne(params,function(err,results){
            if(err){
                console.log("error getone at student controller",err)
            }
            res.send(results)
        });

      },
  
     //update one student
      updateOne: function(req, res){
        var params = [req.body.studentName, req.body.studentpassword,req.body.userType,req.params.id];
        models.updateOne(params, function(err,results) {
          if (err) {console.log("error updateone at students controller",err)}
          console.log(req.body.studentId)
          res.send('student updated')
        });

       
} 
     
   
 
};


  
    
