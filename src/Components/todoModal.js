import React, { Component } from 'react';

class TodoModal extends Component {

    modifyTodo = (id) => {
        fetch(`http://192.168.1.109:3001/todo/updateTodo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.todo)
        }).then(function (response) {
            return response.json();
        }).then(function (res) {
            window.location.reload();
            console.log(res);
        })
    }
    render() {
        const {
            text = "",
            _id = "",
            completed = ""
        } = this.props.todo
        return (
            <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Update</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body form-group form-check form-check-inline">
                            <input type="text" name="todoText" value={text} className="form-control" onChange={(e) => this.props.onChangeHandler(e)} />&nbsp;
                            <input className="form-check-input" type="checkbox" name="completed" checked={completed} onChange={(e) => this.props.onChangeHandlerCheckbox(e)} />
                            <label className="form-check-label">
                                Completed
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => this.modifyTodo(_id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoModal;