/**
 * Todos.js, to dos component
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// Todos class
class Todos extends Component{
    // render
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/> //todo is a prop
        ));
    }
}

// prop types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

// exports
export default Todos;