import React from 'react';

function TaskPriority(props) {
    const decreasePriority = () => {
        props.decreasePriority(props.task.id, props.task.priority - 1);
    };

    const increasePriority = () => {
        props.increasePriority(props.task.id, props.task.priority + 1);
    };

    const determinePriority = () => {
        if (props.task.priority === 3) {
            return "High";
        } else if (props.task.priority === 2) {
            return "Medium";
        } else
            return "Low";
    };

    return (
        <div>
            <button onClick={decreasePriority}
                    disabled={props.task.priority < 2}>
                -
            </button>

            <button>Priority: {determinePriority()}</button>

            <button onClick={increasePriority}
                    disabled={props.task.priority > 2}>
                +
            </button>
        </div>
    );
}

export default TaskPriority;