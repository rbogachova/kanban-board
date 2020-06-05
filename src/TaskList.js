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
                .sort((a, b) => b.priority - a.priority)
                .map(el =>
                    <Task task={el}
                          increasePriority={props.increasePriority}
                          decreasePriority={props.decreasePriority}
                          deleteTask={props.deleteTask}
                          moveTaskLeft={props.moveTaskLeft}
                          moveTaskRight={props.moveTaskRight}/>
                )}
        </div>
    );
}

export default TaskList;