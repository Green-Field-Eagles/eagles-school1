const models = require('../models/marks');
// const body= require('body-parser');
// var app = require('../../server/server')
module.exports = {
    createMark:(req , res)=>{
        params = [ req.body.student_Id ,req.body.subjectId , req.body.first , req.body.second ,req.body.final ];
        models.createMark(params , function(err , result){
            if(err){console.log("error : " , err)}
            res.sendStatus(200);
            console.log(req.body)
        })
    },
    // get mark for one student
    getMarks:(req,res) =>{
        params =[req.params.id];
        models.getMarks(params , function(err , results){
            if(err) console.log("error :" , err)
         res.send(results);
        })
    },
    getAllMarks:(req,res)=>{
        models.getAllMarks(function(err,results){
           
            if (err) { console.log('error in Marks controller',err)}
            res.json(results);
        
         })

    }
}