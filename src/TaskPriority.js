import React from 'react';

function TaskPriority(props) {
    const minusPriority = () => {
        props.minusPriority(props.task.id, props.task.priority - 1);
    };

    const plusPriority = () => {
        props.plusPriority(props.task.id, props.task.priority + 1);
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
            <button onClick={minusPriority}
                    disabled={props.task.priority < 2}>
                -
            </button>

            <button>Priority: {determinePriority()}</button>

            <button onClick={plusPriority}
                    disabled={props.task.priority > 2}>
                +
            </button>
        </div>
    );
}

export default TaskPriority;