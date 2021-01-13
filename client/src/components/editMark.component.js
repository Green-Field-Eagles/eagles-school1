import React ,{Component} from 'react';
import axios from 'axios';
import MarksList from './marksList.component'

//creating admin component
export default class addMarks extends Component {
    constructor(props){
        super(props);
        this.state={
            student_Id :'',
            subjectId  :'',
            first      :'',
            second     :'',
            final      :'',
            markslist  :[],
            students   :[],
            subjects   :[]
        }
        //to bind this to the functions
        this.changeFormHandle = this.changeFormHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.retrieveAllStudents = this.retrieveAllStudents.bind(this);

    }

    
    //function to handle all input fields
    changeFormHandle(e){
        const target =e.target;
        const value = target.value
        const name = target.name;
        //[name] will change according to eachh input depending on each name of input
        this.setState({
         [name] : value,
        })
    }


    

    retrieveData() {
        axios.get('/getAllMarks')
        .then(response => {
          this.setState({ marks: response.data })
        })
        .catch((error) => {
          console.log(error);
        })

    }

    retrieveOneStudents(){
        axios.get(`/getOne/${this.props.match.params.id}`)
        .then(response => {
          this.setState({
            studentName : response.data[0].subjectName,
            adminpassword: response.data[0].adminpassword,
            userType : response.data[0].userType
            
         })
        //   console.log(response.data)
        
        })
        .catch((error) => {
          console.log(error);
        })
      }
      retrieveAllStubjects(){
          axios.get('/getAllSubjects')
          .then(response  =>{
              this.setState({subjects : response.data})
        
          })
          .catch((error)=>
              {console.log(error)}
           )
      }

      componentDidMount() {
        this.retrieveData();
        this.retrieveAllStudents();
        this.retrieveAllStubjects();
      }



      // onsubmit handle 
    //function to submit form
    onSubmit(e){
        e.preventDefault();
        const marks = {
            student_Id : this.state.student_Id,
            subjectId : this.state.subjectId,
            first       : this.state.first,
            second      : this.state.second,
            final       : this.state.final,
        }
      
        console.log(marks);
        axios.post('/createMark',marks)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        this.retrieveData();

          //for take the user to the home after submite the form
    //we need to uncomment this line
    // window.location = '/';
    }

      render(){
        return (
            <div>
                
            <h3>Add New Mark</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Student Name: </label>
                        <select required
                                className="form-control"
                                value={this.state.student_id}
                                onChange={this.changeFormHandle}
                                name = 'student_Id'
                                >

                                {
                                    this.state.students.map(function(student) {
                                        
                                    return <option 
                                        key={student.studentId}
                                        value={student.studentId}>
                                            {student.studentName}
                                        </option>;
                                    })
                                }

                            </select> 
                    </div> 
                    <div className="form-group">
                        <label>Subject Name: </label>
                        <select required
                                className="form-control"
                                value={this.state.subjectId}
                                onChange={this.changeFormHandle}
                                name = 'subjectId'
                                >
                                {
                                     
                                    this.state.subjects.map(function(subject) {
                                    return <option 
                                        key={subject.subjectId}
                                        value={subject.subjectId}>{subject.subjectName}
                                        </option>;
                                    })
                                }
                        </select>
                    </div> 

                    <div className="form-group">
                        <label>First Exam: </label>
                        <input  type="number"
                            required
                            name='first'
                            className="form-control"
                            value={this.state.first}
                            onChange={this.changeFormHandle}
                        />
                    </div> 
                    <div className="form-group">
                        <label>Second Exam: </label>
                        <input  type="number"
                            required
                            name='second'
                            className="form-control"
                            value={this.state.second}
                            onChange={this.changeFormHandle}
                        />
                        
                    </div> 
                    <div className="form-group">
                        <label>Final Exam: </label>
                        <input  type="number"
                            required
                            name='final'
                            className="form-control"
                            value={this.state.final}
                            onChange={this.changeFormHandle}
                        />
                    </div> 
                    <div className="form-group">
                        <input type="submit" value="Add Mark" className="btn btn-primary" />
                    </div>

                        
                    
                </form>
                {/* <div><MarksList/></div> */}
            </div>
        )
    }





}