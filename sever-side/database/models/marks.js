const marks = require('../controllers/marks');
var db = require('../database');
// to export all module to use it in controller 
module.exports = {
    // create new mark
    createMark:(params,callback)=>{
        //insert mark query 
        var queryStr = `INSERT INTO marks (student_Id ,subjectId, first , second , final  ) VALUES (?,?,?,?,?)`;
        db.query(queryStr , params,function(err,result){
            callback(err,result)
        })
    },

    getAllMarks:(callback)=>{
       // get all marks for each student
        var queryStr = `SELECT  students.studentName , subjects.subjectName, marks.first , marks.second , marks.final  FROM marks  INNER JOIN subjects ON marks.subjectId=subjects.subjectId INNER JOIN students ON marks.student_Id = students.studentId;`;
        db.query(queryStr , function(err,results){
            callback(err,results)
        })
    },
      
    


    // get mark for one student
    getMarks:(params,callback)=>{
        var queryStr = `SELECT students.studentName , subjects.subjectName, marks.first , marks.second , marks.final FROM marks  INNER JOIN subjects ON marks.subjectId=subjects.subjectId INNER JOIN students ON marks.student_Id = students.studentId WHERE marks.student_Id = ?;`;
        db.query(queryStr ,params, function(err,results){
            callback(err,results)
        })
    }


}



