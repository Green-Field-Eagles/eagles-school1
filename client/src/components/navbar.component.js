import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//creating Navbar component
export default class Navbar extends Component {
  render() {   
       return (    
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
        <Link to="/" className="navbar-brand">EAGLES</Link> 
            <div className="collpase navbar-collapse"> 
            <ul className="navbar-nav mr-auto">        
                      
                <li className="navbar-item">          
                     <Link to="/create/student" className="nav-link">Students</Link>      
                </li> 
                <li className="navbar-item">          
                    <Link to="/create/admin" className="nav-link">Admins</Link>      
                </li>
                <li className="navbar-item">          
                      <Link to="/crud/marks" className="nav-link">Marks</Link>      
                </li>
                <li className="navbar-item">          
                     <Link to="/createsubject" className="nav-link">subject</Link>      
                </li>
                <li className="navbar-item">          
                      <Link to="/createMark" className="nav-link">Add marks</Link>      
                </li>
                       
                </ul> 
            </div> 
        </nav> 
               );  
            }
        }