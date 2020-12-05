import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import studentsMock from '../data/students'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';


//creating component to fill table rows
const Student = (props) => (
    <tr>
    <td>{props.student.studentName}</td>
    <td>{props.student.subjectName}</td>
    <td>{props.student.first}</td>
    <td>{props.student.second}</td>
    <td>{props.student.final}</td>

     {/* <td>
     <Button variant="success" color="#ffffff"><Link to={"/updateOne/"+props.student.studentId}>edit</Link></Button> 
    </td>
    <td>
    <Button variant="danger" color="#ffffff"> <a href="#" onClick={() => { props.deleteStudent(props.student.studentId) }}>delete</a></Button>
    </td> */}
  </tr>
)

//creating studentList component
export default class StudentList extends Component {
    constructor(props){
        super(props)
        this.state = {marks: []}
    
    }
    //this function is to get all data from database when we open the page
    componentDidMount() {

        axios.get('/getAllMarks')
          .then(response => {
            this.setState({ marks: response.data })
            console.log(response.data)
          })
          .catch((error) => {
            // this.setState({ students: studentsMock })
            console.log(error);
          })
        }

        //function to delete one student depending on studentId
    // deleteStudent(id) {
    //     axios.delete('/deleteOne/'+id)
    //     .then(response => { console.log('helllllooooo',response.data) });
    
    //     this.setState({
    //       students: this.state.students.filter(el => el.id !== id)
    //     })
    //   };

     
    myStydentsList(){
      return this.state.marks.map(currentStudent => {
          console.log('helllloo',currentStudent)
        return <Student student={currentStudent} key={currentStudent.studentId}/>;
      })
    }    

    
    render() {
        return (
          <div>
            <h3>Students Marks</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Student Name </th>
                  <th>Subject Name</th>
                  <th>First</th>
                  <th>Second</th>
                  <th>Final</th>
                </tr>
              </thead>
              <tbody>
                { this.myStydentsList() }
              </tbody>
            </table>
          </div>
        )
      }    

    }