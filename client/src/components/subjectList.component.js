import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//creating component to fill table rows
const Subject = (props) => (
    <tr>
        <td>{props.subject.subjectId}</td>
        <td>{props.subject.subjectName}</td>
  </tr>
)
//creating adminList component
export default class SubjectList extends Component {
    constructor(props){
        super(props)
        this.state = {subjects: []}
    }
    //this function is to get all data from database when we open the page
    componentDidMount() {
        axios.get('/getAllSubjects')
          .then(response => {
            this.setState({ subjects: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
          
        }
      //this is to list data one by one to create admin component for every admin 
    subjectsList() {
          return this.state.subjects.map(currentsubject => {
          return <Subject subject={currentsubject} key={currentsubject.subjectId}/>;
          })
    }
    render() {
        return (
          <div>
            <h3>Subjects</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Subject Id</th>
                  <th>Subject Name</th>
                </tr>
              </thead>
              <tbody>
                { this.subjectsList() }
              </tbody>
            </table>
          </div>
        )
      }    
    }
