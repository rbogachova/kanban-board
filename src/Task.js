import React, {useState} from 'react';

function Task(props) {
    const deleteTask = () => {
        props.deleteTask(props.task.id);
    };

    const moveTaskRight = () => {
        props.moveTaskRight(props.task.id);
    };

    const moveTaskLeft = () => {
        props.moveTaskLeft(props.task.id);
    };

    return (
        <div className="card shadow bg-white rounded">
            <div className="card-body">
                <button>Priority: {props.task.priority}</button>
                <p className="card-text">{props.task.name}</p>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-left"
                        onClick={deleteTask}>
                    <i className="fa fa-trash-o"/>
                </button>
                {
                    props.status !== 'closed' &&
                    <button type="button"
                            className="btn btn-outline-success btn-sm float-right"
                            onClick={moveTaskRight}>
                        <i className="fa fa-arrow-right"/>
                    </button>
                }
                {
                    props.status !== 'todo' &&
                    <button type="button"
                            className="btn btn-outline-success btn-sm float-right"
                            onClick={moveTaskLeft}>
                        <i className="fa fa-arrow-left"/>
                    </button>
                }
            </div>
        </div>
    );
}

export default Task;