import React, {useState} from 'react';

function NewTaskForm(props) {
    const [taskInput, setTaskInput] = useState('');
    const [taskPriority, setTaskPriority] = useState(3);

    const openAddTaskForm = () => {
        props.openAddTaskForm();
    };

    const cancelAddTask = () => {
        props.cancelAddTask();
        setTaskInput('');
    };

    const submitTask = () => {
        props.addTask(taskInput, taskPriority);
        setTaskInput('');
        setTaskPriority(3);
    };

    return (
        <div>
            {!props.isAddTaskFormOpen &&
            <button type="button"
                    className="btn btn-primary"
                    onClick={openAddTaskForm}>
                Add Task
            </button>
            }

            {props.isAddTaskFormOpen &&
            <form onSubmit={submitTask}>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="taskName">Task</label>
                        <input type="text"
                               className="form-control"
                               id="taskName"
                               value={taskInput}
                               onChange={e => setTaskInput(e.target.value)}/>
                    </div>

                    <div className="col-md-2 mb-3">
                        <label htmlFor="taskPriority">Priority</label>
                        <select className="form-control"
                                id="taskPriority"
                                onChange={e => setTaskPriority(parseInt(e.target.value))}
                                required>
                            <option selected disabled value="">Choose...</option>
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                    </div>
                </div>

                <button type="submit"
                        className="btn btn-primary mr-2"
                        disabled={taskInput.trim().length < 4}>
                    Submit
                </button>

                <button type="button"
                        className="btn btn-secondary"
                        onClick={cancelAddTask}>
                    Cancel
                </button>
            </form>
            }
        </div>
    );
}

export default NewTaskForm;