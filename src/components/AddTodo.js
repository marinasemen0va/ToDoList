/**
 * AddTodo.js, add to do component
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React, {Component} from 'react';
import PropTypes from 'prop-types'

// AddTodo class
export class AddTodo extends Component{
    // state
    state = {
        title:''
    };

    // onChange function
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    // onSubmit function
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodo(this.state.title);
        }
        this.setState({title:''});
    };

    // render
    render() {
        return (
            <form style={{display: 'flex', padding: '20px'}} onSubmit={this.onSubmit}>
                <input
                    style={{flex: '10', padding: '5px'}}
                    type="text"
                    autoComplete='off'
                    name="title"
                    placeholder="Add task..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1', background: '#002B50', textShadow: '1px 2px 4px black'}}
                />
            </form>
        )
    }
}

// prop types
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

// export
export default AddTodo;