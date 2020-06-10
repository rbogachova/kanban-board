import React from 'react';
import Task from "./Task";

function TaskList(props) {

    const taskQuantity = props.tasks
        .filter(el => el.status === props.taskListStatus)
        .length;

    return (
        <div className="col-sm">
            {
                props.taskListStatus !== "closed"
                    ? <h6>{props.taskListName + " " + taskQuantity}</h6>
                    : <h6>{`${props.taskListName} ${taskQuantity} OF ${props.tasks.length}`}</h6>
            }

            {
                props.tasks.filter(el => el.status === props.taskListStatus)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el =>
                        <Task key={el.id}
                              task={el}
                              taskListStatus={props.taskListStatus}
                              increasePriority={props.increasePriority}
                              decreasePriority={props.decreasePriority}
                              deleteTask={props.deleteTask}
                              editTask={props.editTask}
                              moveTaskLeft={props.moveTaskLeft}
                              moveTaskRight={props.moveTaskRight}/>
                    )
            }
        </div>
    );
}

export default TaskList;