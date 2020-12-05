import React ,{Component} from 'react';
import axios from 'axios';
import AdminList from './adminList.component'


//creating admin component
export default class CreateAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
            adminName :'',
            adminpassword : '',
            userType :'',
            users :[]
        }
        //to bind this to the functions
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

   
    
    //function to handle all input fields
    changeFormHandle(e){
        const target =e.target;
        const value = target.value
        const name = target.name;
        //[name] will change according to eachh input depending on each name of input
        this.setState({
         [name] : value,
         admins :[]
        })
    }

    //function to submit form
    onSubmit(e){
        e.preventDefault();
        const users = {
            adminName: this.state.adminName,
            hash: this.state.adminpassword,
            userType: this.state.userType,
          }
      
          console.log(users);
          axios.post('/create/admin',users)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

          this.retrieveData();

          //for take the user to the home after submite the form
    //we need to uncomment this line
    // window.location = '/';
    }
    
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

    render(){
        return (
        <div>
            <div>
            <h3>Create New Admin</h3>
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
                        <option value = ''> </option>
                        <option value = 'user'>Student</option>
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
                <input type="submit" value="Create Admin" className="btn btn-primary" />
              </div>
            </form>
          </div>
          <div><AdminList/></div>
            </div>
            
        )
    }
}