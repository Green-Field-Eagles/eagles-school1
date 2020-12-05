var models = require('../models/admin');
var db = require('../database')
const body= require('body-parser');
var app = require('../../server/server')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
  


module.exports = {

    getAlladmin:(req,res) =>{
        models.getAlladmin(function(err,results){
           
           if (err) { console.log('error in myAdmin controller',err)}
           res.json(results);
       
        })
       },

      //  createadmin: function (req, res) {
          
      //   //    console.log(req.body,'req.body')
      //   var params =[req.body.adminName,req.body.hash,req.body.userType];
      //   console.log(req.body.adminName,"create")
      //   models.createadmin(params, function(err, results) {
      //     if (err) { console.log("error post at admin controller",err) }
      //     res.sendStatus(200)
          
      //   });
      // },
// 
      createadmin:  async function(req, res){
        const {adminName, adminpassword,userType} = req.body
        // incription
        const hash =  await bcrypt.hash(adminpassword, 10 ,function(err, results) {
          if (err) { console.log("error post at admin controller",err) }
         
           })
        // 
        const params = [adminName, hash , userType]

        console.log(adminpassword);
        await models.createadmin(params,function(err, results) {
        if (err) { console.log("error post at student controller",err) }
        res.sendStatus(200)
         });
      },

       
      deleteOneadmin: function(req,res){

        var params = [req.params.id];
        models.deleteOneadmin(params,function(err,results){
            if(err){
                console.log("error delete at admin controller",err)
            }
            res.send('admin deleted')
        })



      },

      getOneadmin : function(req,res){
        var params = [req.params.id];
        models.getOneadmin(params,function(err,results){
            if(err){
                console.log("error getone at admin controller",err)
            }
            res.send(results)
        });

      },

      updateOneadmin: function(req, res){
        // to update one admin req.param it from url 
        var params =[req.body.adminName,req.body.hash , req.params.id];
        models.updateOneadmin(params, function(err, results) {
          if (err) { console.log("error post at admin controller",err) }
          res.sendStatus(200)
          
        });



       
} 

       
} 