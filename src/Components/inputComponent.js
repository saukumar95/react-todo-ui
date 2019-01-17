import React, { Component } from 'react';

class InputComponent extends Component {
    constructor() {
        super();
        this.state = {
            todotext: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addTodo = (e) => {
        e.preventDefault();
        let todoObj = {
            text: this.state.todotext
        }
        fetch('http://192.168.1.109:3001/todo/addTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoObj)
        }).then(function (todo) {
            return todo.json();
        }).then(function (todo) {
            console.log(todo);
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-md-center">
                <form className="form-inline" onSubmit={this.addTodo}>
                    <div className="form-group">
                        <input type="text" name="todotext" placeholder="Enter something.." value={this.state.todotext} onChange={this.handleChange} className="form-control" autoComplete="off" autoFocus />
                    </div>
                    <button type="submit" className="btn"><i className="fas fa-plus"></i></button>
                </form>
            </div>
        );
    }
}

export default InputComponent;