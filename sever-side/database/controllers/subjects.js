var models = require('../models/subjects');
var db = require('../database');
const body= require('body-parser');
var app = require('../../server/server');
module.exports = {
   getAllsubjects: (req, res)=> {
    models.getAllsubjects(function(err, results) {
        if (err) {console.log("error at subjects controller", err )}
        res.json(results);
    })
   },
    createsubject: function(req, res) {
        var params = [req.body.subjectName];
        console.log(req.body.subjectName,"create");
        models.createsubject(params, function(err,results) {
            if (err) { console.log("error post at subjects controller",err) }
            res.sendStatus(200)
        });
    },
    deleteOnesubject: function(req, res) {
        var params = [req.params.id];
        models.deleteOnesubject(params, function(err,results){
            if (err) {console.log("error deletesubject at subjects controller",err)}
            res.send('subject deleted')
        })
    },
    getOnesubject: function(req, res) {
        var params = [req.params.id];
        models.getOnesubject(params, function(err, results) {
            if (err) {console.log("error getonesubject at subjects controller",err)}
            res.send(results); // whether we use send or json it is the same
            console.log(results)
        });
    }
}