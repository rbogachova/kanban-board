import React from 'react';
import TaskPriority from "./TaskPriority";
import './Task.css';

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

    let priorityBorderClasses = 'border-left';

    if (props.task.priority === 3) {
        priorityBorderClasses += ' border-danger';
    } else if (props.task.priority === 2) {
        priorityBorderClasses += ' border-warning';
    } else
        priorityBorderClasses += ' border-success';

    return (
        <div className="card shadow bg-white rounded mb-2">
            <div className={priorityBorderClasses}>
                <div className="card-body">
                    <TaskPriority task={props.task}
                                  increasePriority={props.increasePriority}
                                  decreasePriority={props.decreasePriority}/>

                    <div className="card-header">{props.task.name}</div>

                    <button type="button"
                            className="btn btn-sm float-left"
                            onClick={deleteTask}>
                        <i className="fa fa-trash-o"/>
                    </button>

                    {
                        props.taskListStatus !== 'closed' &&
                        <button type="button"
                                className="btn btn-sm float-right"
                                onClick={moveTaskRight}>
                            <i className="fa fa-arrow-right"/>
                        </button>
                    }

                    {
                        props.taskListStatus !== 'todo' &&
                        <button type="button"
                                className="btn btn-sm float-right"
                                onClick={moveTaskLeft}>
                            <i className="fa fa-arrow-left"/>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Task;