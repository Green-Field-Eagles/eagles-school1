import React ,{Component} from 'react';
import axios from 'axios';
// import AdminList from './adminList.component';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';



// define edit Admin component 
export default class EditAdmin extends Component {
    constructor(props){
        super(props);
        //
        this.state={
            adminName :'',
            adminpassword : '',
            userType :'',
            admins :[]
        }
        //to bind this to the functions
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
}


    retrieveData() {
        axios.get(`/getOneadmin/${this.props.match.params.id}`)
        .then(response => {
            // we put it to fill the input fields 
          this.setState({   
                        adminName : response.data[0].adminName,
                        adminpassword: response.data[0].adminpassword,
                        userType : response.data[0].userType 
                    })
                  
        })

        .catch((error) => {
          console.log(error);
        })

      }
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
            adminName: this.state.adminName,
            adminpassword: this.state.adminpassword,
            userType: this.state.userType,
          }
      
          console.log(users);
          
          axios.post('/updateOneadmin/'+this.props.match.params.id,users)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));


        //for take the user to the home after submite the form
        //we need to uncomment this line
        // window.location = '/';
    }

    render(){
        // const {adminName,adminpassword,userType} = this.state
        return (
        <div>
            <div>
            <h3>Update Admin</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>AdminName: </label>
                <input  type="text"
                    required
                    name = 'adminName'
                    className="form-control"
                    value={this.state.adminName}
                    onChange={this.changeFormHandle}
                    />
              </div>
              <div className="form-group"> 
                <label>Passowrd: </label>
                <input  type="passowrd"
                    required
                    name='adminpassword'
                    className="form-control"
                    value={this.state.adminpassword}
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
                        <option value = 'user'>Student</option>
                        <option value = 'Admin'>Admin</option>
                </select>
        </div>
        {/* <input type="hidden" value={this.props.match.params.id} className="btn btn-primary" /> */}

              <div className="form-group">
                <input type="submit" value="Update Admin" className="btn btn-primary" />
              </div>
            </form>

          </div>
        
            </div>
            
        )
    }
}