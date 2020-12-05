import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Route} from   "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar.component'
import CreateStudent from './components/createStudent.component';
import CreateAdmin from './components/createAdmin.component';
import MarksForm from './components/marks.component';
import EditAdmin from './components/editAdmin.component';
import CreateSubject from './components/CreateSubject.component';
import AddMarks from './components/addMarks.component';
import EditStudent from './components/editStudent.component';
import LoginForm from './components/lolginForm'
function App()  {
  
  return (
    
    <Router>

       <Route path='/' exact component={LoginForm}></Route>

      
      <Navbar/>
        <br/>
        <div className ="container">
         
         <Route path ='/create/student' exact  component ={CreateStudent}></Route>
         <Route path ='/create/admin' exact component ={CreateAdmin}></Route>
         <Route path ='/crud/marks' exact  component ={MarksForm}></Route>
         <Route path ='/editAdmin/:id' exact component ={EditAdmin}></Route>
         <Route path ='/createsubject' exact component ={CreateSubject}></Route>
         <Route path ='/createMark' exact component ={AddMarks}></Route>
         <Route path ='/updateOne/:id'  component ={EditStudent}></Route>

       

        </div>


  </Router>
  
  );
}


ReactDOM.render(<App />,document.getElementById('app'));