import React ,{Component} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

//creating edit student component 
export default class EditStudent extends Component {
    constructor(props){
        super(props);
        //
        this.state={
            studentName :'',
            studentpassword : '',
            userType :'',
            students :[]
        }

         //to bind this to the functions
     this.changeFormHandle = this.changeFormHandle.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
    }
        
    retrieveData() {
        
        // to retrieve one student information to edit it 
        axios.get(`/getOne/${this.props.match.params.id}`)
        .then(response => {
            // data it possible change
          this.setState({   
            studentName : response.data[0].studentName,
            studentpassword: response.data[0].studentpassword,
            userType : response.data[0].userType 
           })             
        })

        .catch((error) => {
          console.log(error);
        })

      }
    // function must work when page load 
    componentDidMount() {
        this.retrieveData();
       
    }


    
    //function to handle all input fields
    changeFormHandle(e){
        
        // e => event here it change 
        // target => input field
        // name => the name of this input
        //[name] will change according to eachh input depending on each name of input
     
        const target =e.target;
        const value = target.value
        const name = target.name;
        //[name] will change according to eachh input depending on each name of input
        this.setState({
         [name] : value
        })
        // console.log(this.props.match.param.adminId)
    }

    //function to submit form
    onSubmit (e){
        console.log("heeellllloooo"+this.props.match.params.id)
        e.preventDefault();
        const users = {
            studentName: this.state.studentName,
            studentpassword: this.state.studentpassword,
            userType: this.state.userType,
          }
      
          console.log(users);
          
          axios.post('/updateOne/'+this.props.match.params.id,users)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));


        //to take the user home after submitting the form
        //we need to uncomment this line
        // window.location = '/';
    }
    render(){
        // const {adminName,adminpassword,userType} = this.state
        return (
            <div>
            <div> 
                <h3>Create New Student</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Student name: </label>
                    <input  type="text"
                        required
                        name = 'studentName'
                        className="form-control"
                        value={this.state.studentName}
                        onChange={this.changeFormHandle}
                        />
                </div>
                <div className="form-group"> 
                    <label>Passowrd: </label>
                    <input  type="passowrd"
                        required
                        name='studentpassword'
                        className="form-control"
                        value={this.state.studentpassword}
                        onChange={this.changeFormHandle}
                    />
                </div>
                <div className="form-group"> 
                    <label>UserType: </label>
                    <select ref="userInput"
                        required
                        name ='userType'
                        className="form-control"
                        value={this.state.userType}
                        onChange={this.changeFormHandle}>
                            <option value = 'Student'>Student</option>
                            <option value = 'Admin'>Admin</option>
                        {/* {
                            this.state.users.map(function(user) {
                            return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                            
                        } */}
                    </select>
            </div>
                <div className="form-group">
                    <input type="submit" value="Create Student" className="btn btn-primary" />
                </div>
                </form>
                </div>   
               
          </div>

            
            
        )
    }




}

