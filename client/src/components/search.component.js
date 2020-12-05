import React, { Component } from 'react';
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTrim:''
        };
        const {updateSearch} = this.props;
        this.submitSearch = () =>{
            updateSearch({searchTrim:this.state.searchTrim});
        };
        this.handleOnChange = (e) => {
            //this line of code extracts the value from e.target object so that i won't have
            //to write the e.target.value again
            const {value} = e.target;
            this.setState({searchTrim: value});
            updateSearch({searchTrim : value});
        }
    }
    render() {
        return <div className="container">
            <h1>Search for student</h1>
            <form action="" onSubmit={(e)=> {
                e.preventDefault();
                this.submitSearch()
            }}>
                <div className="form-group">
                    <label htmlFor="">Search Student</label>
                    <input type="text" className="form-control" name="searchTrim" onChange={this.handleOnChange} />
                </div>
            </form>
        </div>
    }
}
export default Search;