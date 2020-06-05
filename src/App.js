import React, {useState} from 'react';
import './App.css';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
    {id: 1, name: 'Do Components', status: 'todo', priority: 3},
    {id: 2, name: 'Watch Last Lesson Video', status: 'resolved', priority: 2},
    {id: 3, name: 'Learn React', status: 'in progress', priority: 1},
    {id: 4, name: 'Write Todo App from Scratch', status: 'closed', priority: 2},
    {id: 5, name: 'Make Kanban Board', status: 'todo', priority: 1}
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

    const addTask = (taskName) => {
        setIsAddTaskFormOpen(false);
        const updatedTasks = [...tasks];
        updatedTasks.push({id: Math.random(), name: taskName, status: 'todo', priority: null});
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

    const moveTaskLeft = (taskId) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (el.status === 'in progress') {
                    return {
                        ...el,
                        status: 'todo'
                    }
                } else if (el.status === 'resolved') {
                    return {
                        ...el,
                        status: 'in progress'
                    }
                } else
                    return {
                        ...el,
                        status: 'resolved'
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
                             addTask={addTask}/>
                <hr/>
                <div className="row">
                    <TaskList taskListName="To Do"
                              taskListStatus="todo"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="In Progress"
                              taskListStatus="in progress"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="Resolved"
                              taskListStatus="resolved"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="Closed"
                              taskListStatus="closed"
                              tasks={tasks}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}/>
                </div>
            </div>
        </div>
    );
}

export default App;