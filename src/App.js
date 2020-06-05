import React, {useState} from 'react';
import './App.css';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
    {id: 1, name: 'Do Components', status: 'todo'},
    {id: 2, name: 'Watch Last Lesson Video', status: 'resolved'},
    {id: 3, name: 'Learn React', status: 'in progress'},
    {id: 4, name: 'Write Todo App from Scratch', status: 'closed'},
    {id: 5, name: 'Make Kanban Board', status: 'todo'}
];

function App() {
    const [tasks, setTasks] = useState(initialTasks);
    const [isAddTaskFormOpen, setIsAddTaskFormOpen] = useState(false);

    const openAddTaskForm = () => {
        setIsAddTaskFormOpen(true);
    };

    const cancelAddTask = () => {
        setIsAddTaskFormOpen(false);
    };

    const submitTask = (taskName) => {
        setIsAddTaskFormOpen(false);
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
                if (el.status === 'todo') {
                    return {
                        ...el,
                        status: 'in progress'
                    }
                } else if (el.status === 'in progress') {
                    return {
                        ...el,
                        status: 'resolved'
                    }
                } else
                    return {
                        ...el,
                        status: 'closed'
                    }
            } else
                return el;
        });
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div className="container">
                <h1>Kanban</h1>
                <NewTaskForm isAddTaskFormOpen={isAddTaskFormOpen}
                             openAddTaskForm={openAddTaskForm}
                             cancelAddTask={cancelAddTask}
                             submitTask={submitTask}/>
                <hr/>
                <div className="row">
                    <TaskList name="To Do"
                              status="todo"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList name="In Progress"
                              status="in progress"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList name="Resolved"
                              status="resolved"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList name="Closed"
                              status="closed"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                </div>
            </div>
        </div>
    );
}

export default App;