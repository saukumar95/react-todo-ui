import React, { Component } from 'react';
import TodoModal from './todoModal';

class DisplayComponent extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: {}
        }
    }
    getTodoList = () => {
        fetch('http://192.168.1.109:3001/todo/getTodos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({
                todos: res.todos
            })
        });
    }

    componentDidMount() {
        this.getTodoList();
    }

    onChangeHandler = (e) => {
        let newTodo = { ...this.state.todo, text: e.target.value };
        this.setState({
            todo: newTodo
        })
    }

    onChangeHandlerCheckbox = e => {
        let newTodo = { ...this.state.todo, completed: e.target.checked }
        this.setState({
            todo: newTodo
        })
    }


    removeTodo = (id) => {
        fetch(`http://192.168.1.109:3001/todo/deleteTodo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        }).then(function (res) {
            window.location.reload();
            console.log(res);
        })
    }

    getTodo = (id) => {
        fetch(`http://192.168.1.109:3001/todo/getTodo/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response.json()
        }).then((res) => {
            this.setState({
                todo: res.todo
            })
        });
    }
    render() {
        return (
            <div className="d-flex justify-content-md-center">
                <ul className="list-group list-group-flush">
                    {this.state.todos.map((todo) => {
                        return <li className="list-group-item" key={todo._id}>
                            {todo.text}&nbsp;<i className="far fa-edit" style={{ cursor: "pointer" }} data-toggle="modal" data-target="#TodoModal" onClick={() => this.getTodo(todo._id)}></i>&nbsp;<i className="far fa-trash-alt" style={{ cursor: "pointer" }} onClick={() => this.removeTodo(todo._id)}></i>
                        </li>
                    })
                    }
                </ul>
                <TodoModal modalId={"TodoModal"} todo={this.state.todo} onChangeHandler={this.onChangeHandler} onChangeHandlerCheckbox={this.onChangeHandlerCheckbox} />
            </div>
        );
    }
}

export default DisplayComponent;