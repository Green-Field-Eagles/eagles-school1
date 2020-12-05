import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import studentsMock from '../data/students'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

//creating component to fill table rows
const Student = (props) => (
    <tr>
    <td>{props.student.studentId}</td>
    <td>{props.student.studentName}</td>
    <td>{props.student.studentpassword}</td>
     <td>
     <Button variant="success" color="#ffffff"><Link to={"/updateOne/"+props.student.studentId}>edit</Link></Button> 
    </td>
    <td>
    <Button variant="danger" color="#ffffff"> <a href="#" onClick={() => { props.deleteStudent(props.student.studentId) }}>delete</a></Button>
    </td>
  </tr>
)

//creating studentList component
export default class StudentList extends Component {
    constructor(props){
        super(props)
        this.state = {students: []}
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    //this function is to get all data from database when we open the page
    componentDidMount() {

        axios.get('/getAll')
          .then(response => {
            this.setState({ students: response.data })
            console.log(response.data)
          })
          .catch((error) => {
            // this.setState({ students: studentsMock })
            console.log(error);
          })
        }

        //function to delete one student depending on studentId
    deleteStudent(id) {
        axios.delete('/deleteOne/'+id)
        .then(response => { console.log('helllllooooo',response.data) });
    
        this.setState({
          students: this.state.students.filter(el => el.id !== id)
        })
      };

    

    myStudentsList(){
      return this.state.students.map(currentStudent => {
        return <Student student={currentStudent} deleteStudent={this.deleteStudent} key={currentStudent.studentId}/>;
      })
    }    

    
    render() {
        return (
          <div>
            <h3>Students</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Student Id</th>
                  <th>Student Name</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                { this.myStudentsList() }
              </tbody>
            </table>
          </div>
        )
      }    

    }