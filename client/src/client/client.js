import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route , Switch} from   "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './navbarClient.component'
function Client() {
    return (
        <>
        <Router>
           <Navbar/>
           <Switch>
               <Route path='/'/>
           </Switch>
        </Router>
        </>
    )
}
ReactDOM.render(<Client />,document.getElementById('client'));