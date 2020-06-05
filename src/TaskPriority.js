import React from 'react';

function TaskPriority(props) {
    const minusPriority = () => {
        props.minusPriority(props.task.id, props.task.priority - 1);
    };

    const plusPriority = () => {
        props.plusPriority(props.task.id, props.task.priority + 1);
    };

    return (
        <div>
            <button onClick={minusPriority}
                    disabled={props.task.priority < 2}>
                -
            </button>

            <button>Priority: {props.task.priority}</button>

            <button onClick={plusPriority}
                    disabled={props.task.priority > 2}>
                +
            </button>
        </div>
    );
}

export default TaskPriority;