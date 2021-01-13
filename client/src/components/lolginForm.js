import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            loggedIn : true
         }
         this.logIn = this.logIn.bind(this);

    }

    logIn(e){
        e.preventDefault();
    
        // this.setState({
        //     username: this.state.username,
        //     password : this.state.password,
        //     loggedIn:true 
        // })
        // console.log(this.state)

        
    }
    
   
 
  
    handleChange = e => {
        this.setState({[e.currentTarget.name] : e.currentTarget.value});
    }
    render() {
      const {username, password} = this.state;
        return <div>
            <h1>Log In</h1>
                <form >
                    <div className="form-group"><label htmlFor="username"></label>
                    username<input
                     name ='username'
                     value = {username}
                     onChange = {this.handleChange}
                     type="text"
                     className="form-control"/></div>
                    <div className="form-group"><label htmlFor="password"></label>
                    password<input
                     value = {password}
                      name ='password'
                      onChange = {this.handleChange}
                      type="password"
                       className="form-control"/></div>
                       
                    <button onClick={this.logIn}  className="btn btn-primary"><Link to={"/create/admin/"}>LogIn</Link></button>
                </form>
        </div>
    }


}  

export default LoginForm;