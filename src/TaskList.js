import React from 'react';
import Task from "./Task";

function TaskList(props) {

    return (
        <div className="col-sm">
            <div className="card shadow bg-white rounded">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
            {props.tasks.filter(el => el.status === props.status).map(el =>
                <Task taskName={el.name}
                      id={el.id}
                      status={el.status}
                      deleteTask={props.deleteTask}
                      moveTaskLeft={props.moveTaskLeft}
                      moveTaskRight={props.moveTaskRight}/>
            )}
        </div>
    );
}

export default TaskList;