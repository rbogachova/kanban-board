import React, {useState} from 'react';

function NewTaskForm(props) {
    const [taskInput, setTaskInput] = useState('');

    const openAddTaskForm = () => {
        props.openAddTaskForm();
    };

    const cancelAddTask = () => {
        props.cancelAddTask();
        setTaskInput('');
    };

    const submitTask = () => {
        props.addTask(taskInput);
        setTaskInput('');
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
        </div>
    );
}

export default NewTaskForm;