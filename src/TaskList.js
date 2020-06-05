import React from 'react';
import Task from "./Task";

function TaskList(props) {

    return (
        <div className="col-sm">
            {props.name}
            {props.tasks.filter(el => el.status === props.status).map(el =>
                <Task taskName={el.name}
                      id={el.id}
                      deleteTask={props.deleteTask}
                      moveTaskRight={props.moveTaskRight}/>
            )}
        </div>
    );
}

export default TaskList;