import React from 'react';
import Task from "./Task";

function TaskList(props) {
    return (
        <div className="col-sm">
            <h6>{props.taskListName}</h6>

            {props.tasks.filter(el => el.status === props.taskListStatus)
                .sort((a, b) => b.priority - a.priority)
                .map(el =>
                    <Task task={el}
                          taskListStatus={props.taskListStatus}
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