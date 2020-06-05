import React from 'react';
import Task from "./Task";

function TaskList(props) {

    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="card-body">
                    {props.taskListName}
                </div>
            </div>

            {props.tasks.filter(el => el.status === props.taskListStatus)
                .sort((a, b) => a.priority - b.priority)
                .map(el =>
                    <Task task={el}
                          plusPriority={props.plusPriority}
                          minusPriority={props.minusPriority}
                          deleteTask={props.deleteTask}
                          moveTaskLeft={props.moveTaskLeft}
                          moveTaskRight={props.moveTaskRight}/>
                )}
        </div>
    );
}

export default TaskList;