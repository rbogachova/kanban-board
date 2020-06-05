import React, {useState} from 'react';
import './App.css';

function App() {
    const [isOpenAddTaskForm, setIsOpenAddTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState('');

    const openAddTaskForm = () => {
        setIsOpenAddTaskForm(true);

    };

    const submitTask = () => {
        console.log(taskInput);
        setTaskInput('');
        setIsOpenAddTaskForm(false);
    };

    const cancelAddTask = () => {
        setIsOpenAddTaskForm(false);
        setTaskInput('');
    };

    return (
        <div className="App">
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
                            onClick={submitTask}>
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
                    </div>
                    <div className="col-sm">
                        In Progress
                    </div>
                    <div className="col-sm">
                        Resolved
                    </div>
                    <div className="col-sm">
                        Closed
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
