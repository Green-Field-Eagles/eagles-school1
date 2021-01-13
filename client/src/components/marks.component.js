import React, { Component } from 'react';
import Search from './search.component';
import StudentListSearch from './studentlistSearch.component';

class MarksForm extends Component {
    constructor(){
        super();
        this.state ={
            searchTrim:""
        }
    }
    render() {
        return <div className="wrapper">
            <Search  updateSearch={this.setState.bind(this)} />
            <StudentListSearch  searchTrim={this.state.searchTrim} />
            {/* we have to make Subjects list and aadd a col inside it to represent the marks */}
        </div>
    }
}
export default MarksForm;