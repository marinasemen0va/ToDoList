/**
 * To Do List Web Application
 * Was made as a method of learning React
 * Live at: todolist.digital
 * GitHub repository:
 * based on this tutorial by Traversy Media: https://www.youtube.com/watch?v=sBws8MSXN7A&t=1490s
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';

// App class
class App extends Component {
    // main data
    state = {
        todos: []
    };

    // on load
    componentDidMount() {
        const stored = JSON.parse(localStorage.getItem('stored'));
        if (stored){
            this.setState({todos: stored})
        }
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    // save to local storage
    saveStateToLocalStorage() {
        if (this.state.todos) {
            localStorage.setItem('stored', JSON.stringify(this.state.todos));
        }
    }

    // toggle complete
    markComplete = (id) =>{
        const responses = ["yay! you did this thing!", "congrats! it's done!", "completed!", "good going!"];
        const sizes = [27, 23, 13, 14];
        var rand = Math.floor(Math.random() * Math.floor(4));
        this.setState({todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                    if (todo.completed) {
                        todo.title = todo.title + " [" + responses[rand] + "]";
                    }
                    else{
                        var ind = -1;
                        for (var x = 0; x < 4; x++){
                            if (todo.title.indexOf(responses[x]) !== -1){
                                ind = x;
                            }
                        }
                        todo.title = todo.title.substr(0, todo.title.length - sizes[ind]);
                    }
                }
                return todo
            })})
    };

    // delete todo
    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    // add todo
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({todos:[...this.state.todos, newTodo]});
    };

    // render
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo = {this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

// export
export default App;