import React from 'react';

function Task(props) {

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{props.taskName}</p>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-left"
                        onClick={() => props.deleteTask(props.id)}>
                    <i className="fa fa-trash-o"/>
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={() => props.moveTaskRight(props.id)}>
                    <i className="fa fa-arrow-right"/>
                </button>
            </div>
        </div>
    );
}

export default Task;