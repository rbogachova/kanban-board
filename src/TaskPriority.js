import React from 'react';

function TaskPriority(props) {
    const decreasePriority = () => {
        props.decreasePriority(props.task.id, props.task.priority - 1);
    };

    const increasePriority = () => {
        props.increasePriority(props.task.id, props.task.priority + 1);
    };

    let priorityButtonClasses = 'badge btn';

    if (props.task.priority === 3) {
        priorityButtonClasses += ' btn-danger';
    } else if (props.task.priority === 2) {
        priorityButtonClasses += ' btn-warning';
    } else
        priorityButtonClasses += ' btn-success';

    const determinePriorityWord = () => {
        if (props.task.priority === 3) {
            return "High Priority";
        } else if (props.task.priority === 2) {
            return "Med Priority";
        } else
            return "Low Priority";
    };

    return (
        <div>
            {
                props.task.priority > 1 &&
                <button className="btn btn-sm"
                        onClick={decreasePriority}
                        disabled={props.task.priority < 2}>
                    <i className="fa fa-minus"/>
                </button>
            }

            <div className={priorityButtonClasses}>{determinePriorityWord()}</div>

            {
                props.task.priority < 3 &&
                <button className="btn btn-sm"
                        onClick={increasePriority}
                        disabled={props.task.priority > 2}>
                    <i className="fa fa-plus"/>
                </button>
            }
        </div>
    );
}

export default TaskPriority;