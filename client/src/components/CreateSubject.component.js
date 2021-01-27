import React , {Component} from "react";
import axios from 'axios';
import SubjectList from "./subjectList.component"

export default class CreateSubject extends Component{
    constructor(props){
        super(props);
        this.state={
            subjectName : '',
            subjects : []
        }
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeFormHandle(e){
        this.setState({
            subjectName : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const subject ={
            subjectName:this.state.subjectName
        }
        axios.post('/createsubject',subject)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
        this.retrieveData();
    }
    retrieveData() {
        axios.get('/getAllSubjects')
        .then(response => {
          this.setState({ subjects: response.data })
        })
        .catch((error) => {
          console.log(error);
        })

      }
      componentDidMount() {
        this.retrieveData();
       }
    render(){
        return(
            <div>
               <h3>Create New Subject</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group"> 
                                <label>subject Name: </label>
                                <input  type="text"
                                    required
                                    name = 'subjectName'
                                    className="form-control"
                                    value={this.state.subjectName}
                                    onChange={this.changeFormHandle}
                                    />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Subject" className="btn btn-primary" />
                            </div>
                        </form>
                        <SubjectList/>
            </div>
        )
    }
}
