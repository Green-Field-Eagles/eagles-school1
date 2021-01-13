import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import '../index.css'

// import editAdmin from './editAdmin.component';
//creating component to fill table rows
const Admin = (props) => (
    <tr>
    <td>{props.admin.adminId}</td>
    <td>{props.admin.adminName}</td>
    <td>{props.admin.adminpassword}</td>
     <td>
     <Button variant="success" color="#ffffff" className='list-button'><Link to={"/editAdmin/"+props.admin.adminId}>edit</Link></Button> 
    </td>
    <td>
    <Button variant="danger" color="#ffffff" className='list-button'><a href="#"  onClick={() => { props.deleteadmin(props.admin.adminId) }}>delete</a></Button>
    </td>
  </tr>
)

//creating adminList component
export default class AdminList extends Component {
    constructor(props){
        super(props)
        this.state = {admins: []}
        this.deleteAdmin = this.deleteAdmin.bind(this)
    }
  
        //function to delete one admin depending on adminId
      deleteAdmin(id) {
        axios.delete('/deleteOneadmin/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          admins: this.state.admins.filter(el => el.id !== id)
        })
      };

    

     

      //this function is to get all data from database when we open the page

      retrieveData() {
        axios.get('/getAlladmin')
        .then(response => {
          this.setState({ admins: response.data })
        })
        .catch((error) => {
          console.log(error);
        })

      }
      componentDidMount() {
        this.retrieveData();
       
        }

     //this is to list data one by one to create admin component for every admin 
     adminsList() {
        return this.state.admins.map(currentadmin => {
          return <Admin admin={currentadmin} deleteadmin={this.deleteAdmin} key={currentadmin.adminId}/>;
    })
    }

    render() {
        return (
          <div>
            <h3>Admins</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Admin Id</th>
                  <th>Admin Name</th>
                  <th>Password</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                { this.adminsList() }
              </tbody>
            </table>
          </div>
        )
      }    

    }