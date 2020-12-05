import React  from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route , Switch} from   "react-router-dom";
import {link} from 'react-router-dom'
// import * as FaIcons from "react-icons/fa";
import { FaCalendar } from 'react-icons/fa'
function Navbar(){
    return (
        <>
        <div className='navbar'>
            <link to='#' className='menu-bars'></link>
            <FaIcons.FaBar/>
        </div>
        </>
    )
}
export default Navbar;
