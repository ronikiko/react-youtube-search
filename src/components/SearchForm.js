import React from 'react';

class SearchForm extends React.Component {
    state = {
        term: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
        
        this.props.onRK(this.state.term);
    }
    inputChange = (e) => {
        this.setState({term: e.target.value});
    }

    render(){
        return (
            <div>
                <h1>Youtube Search:</h1>
                <div className="ui segment">
                    <form className="ui form" 
                        onSubmit={this.formSubmit}
                    >
                        <input 
                        type="text"  
                        value={this.state.term}
                        onChange={this.inputChange}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchForm;