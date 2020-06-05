import React from 'react';

function Task(props) {

    const deleteTask = () => {
        props.deleteTask(props.id);
    };

    const moveTaskRight = () => {
        props.moveTaskRight(props.id);
    };


    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{props.taskName}</p>
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

            </div>
        </div>
    );
}

export default Task;