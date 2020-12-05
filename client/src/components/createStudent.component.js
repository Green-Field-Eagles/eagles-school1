import React ,{Component} from 'react';
import axios from 'axios';
import StudentList from './studentList.component';

//creating student component
export default class CreateStudent extends Component {
    constructor(props){
        super(props);
        // data it possible change
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
    
    //function to handle alll input fields
    changeFormHandle(e){
        const target =e.target;
        const value = target.value
        const name = target.name;
        //[name] will change according to eachh input depending on each name of input
        this.setState({
         [name] : value
        })
    }

    //function to submit form
    onSubmit(e){
        e.preventDefault();
        const student = {
            studentName: this.state.studentName,
            studentpassword: this.state.studentpassword,
            userType: this.state.userType
          }
      
      // post request to add new student 
          axios.post('/create/student' , student)
          .then((res)=> console.log(res.data))
          .catch((err)=>console.log(err))

          this.retrieveData();

      //for take the user to the home after submite the form
    //we need to uncomment this line
    // window.location = '/';
    }
    retrieveData(){
        axios.get('/getAll')
        .then(response=>{
            this.setState({students:response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    componentDidMount() {
        this.retrieveData();
       
    }
      
    render(){
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
                            <option value = ''> </option>
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
                <div>
                    <StudentList />
                </div>
          </div>

            
            
        )
    }
}