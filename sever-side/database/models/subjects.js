var db = require('../database');
var routs = require('../../server/routes');;
module.exports = {
//get all subjects
getAllsubjects: function(callback) {
        var queryStr = `SELECT subjectName , subjectId  FROM subjects `;
        db.query(queryStr, function(err, result) {
            callback(err, result)
        });
},
//creating new subject
createsubject: (params,callback) => {
    var queryStr = `insert into subjects(subjectName) values (?)`;
    db.query(queryStr, params, function(err, result) {
        callback(err, result)
    });
}

}