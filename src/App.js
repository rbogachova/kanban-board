import React, {useState} from 'react';
import './App.css';
import {updateExpression} from "@babel/types";

const initialTasks = [
    {id: 1, name: 'Do Components', status: 'todo'},
    {id: 2, name: 'Watch last lesson video', status: 'resolved'},
    {id: 3, name: 'Learn React', status: 'in progress'},
    {id: 4, name: 'Write Todo App from Scratch', status: 'closed'},
    {id: 5, name: 'Make Kanban Board', status: 'todo'}
];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isOpenAddTaskForm, setIsOpenAddTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState('');

    const openAddTaskForm = () => {
        setIsOpenAddTaskForm(true);
    };

    const cancelAddTask = () => {
        setIsOpenAddTaskForm(false);
        setTaskInput('');
    };

    const submitTask = (taskName) => {
        setTaskInput('');
        setIsOpenAddTaskForm(false);
        const updatedTasks = [...tasks];
        updatedTasks.push({id: Math.random(), name: taskName, status: 'todo'});
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(el => el.id !== taskId);
        setTasks(updatedTasks);
    };

    const moveTaskRight = (taskId) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === taskId) {
                return {
                    ...el,
                    status: 'in progress'
                };
            } else
                return el;
        });
        setTasks(updatedTasks);
    };


    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>

                {!isOpenAddTaskForm &&
                <button type="button" className="btn btn-primary" onClick={openAddTaskForm}>Add task</button>
                }

                {isOpenAddTaskForm &&
                <form>
                    <input className="form-control form-control-sm"
                           type="text"
                           value={taskInput}
                           onChange={e => setTaskInput(e.target.value)}/>
                    <button type="submit"
                            className="btn btn-primary"
                            disabled={taskInput.trim().length < 4}
                            onClick={() => submitTask(taskInput)}>
                        Submit
                    </button>
                    <button type="button"
                            className="btn btn-secondary"
                            onClick={cancelAddTask}>
                        Cancel
                    </button>
                </form>
                }

                <div className="row">
                    <div className="col-sm">
                        To Do
                        {tasks.filter(el => el.status === 'todo').map(el =>
                            < div className="card" key={el.id}>
                                <div className="card-body">
                                    <p className="card-text">{el.name}</p>

                                    <button type="button"
                                            className="btn btn-outline-success btn-sm float-left"
                                            onClick={() => deleteTask(el.id)}>
                                        <i className="fa fa-trash-o"/>
                                    </button>

                                    <button type="button"
                                            className="btn btn-outline-success btn-sm float-right"
                                            onClick={() => moveTaskRight(el.id)}>
                                        <i className="fa fa-arrow-right"/>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="col-sm">
                        In Progress
                        {tasks.filter(el => el.status === 'in progress').map(el => <div key={el.id}>{el.name}</div>)}
                    </div>

                    <div className="col-sm">
                        Resolved
                        {tasks.filter(el => el.status === 'resolved').map(el => <div key={el.id}>{el.name}</div>)}
                    </div>

                    <div className="col-sm">
                        Closed
                        {tasks.filter(el => el.status === 'closed').map(el => <div key={el.id}>{el.name}</div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
