/**
 * TodoItem.js, to do item component
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// TodoItem class
export class TodoItem extends Component {
    // styling
    getStyle = () => {
        return{
            background: '#e3f6ff',
            padding: '20px',
            borderBottom: '1px #ccc dotted',
            textDecoration: 'none',
            color: 'rgba(86, 86, 88, 0.98)'
        }
    };

    // render
    render() {
        const { id, title} = this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" style={{textDecoration: 'none'}} onChange={this.props.markComplete.bind(this, id)}/>
                    {' ✩｡:*•.────────────────────────────────────────────  (っ◔◡◔)っ ♥  ───────────────────────────────────────────.•*:｡✩'}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                    <div style={{padding: '0px 35px', overflowWrap: 'break-word'}}>
                        {title}
                    </div>
                </p>
            </div>
        )
    }
}

// button styling
const btnStyle = {
    background: 'linear-gradient(to bottom, #ff777a 0%,#db0003 100%)',
    color: '#fff',
    textShadow: '1px 2px 4px black',
    padding: '4px 9px 6px 9px',
    fontSize: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    float: 'right',
    border: 'none'
};

// prop types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

// export
export default TodoItem