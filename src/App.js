import React, {useState} from 'react';
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

const initialTasks = [
    {id: 1, name: 'Task 1', status: 'todo', priority: 2},
    {id: 2, name: 'Task 2', status: 'resolved', priority: 2},
    {id: 3, name: 'Task 3', status: 'in progress', priority: 3},
    {id: 4, name: 'Task 4', status: 'closed', priority: 1},
    {id: 5, name: 'Task 5', status: 'todo', priority: 3}
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
        updatedTasks.push({id: Math.random(), name: taskName, status: 'todo', priority: 3});
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

    const increasePriority = (taskId, value) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === taskId) {
                return {
                    ...el,
                    priority: value
                }
            } else
                return el;
        });
        setTasks(updatedTasks);
    };

    const decreasePriority = (taskId, value) => {
        const updatedTasks = tasks.map(el => {
            if (el.id === taskId) {
                return {
                    ...el,
                    priority: value
                }
            } else
                return el;
        });
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div className="container">
                <h2>Kanban Board</h2>
                <NewTaskForm isAddTaskFormOpen={isAddTaskFormOpen}
                             openAddTaskForm={openAddTaskForm}
                             cancelAddTask={cancelAddTask}
                             addTask={addTask}/>
                <hr/>
                <div className="row">
                    <TaskList taskListName="TO DO"
                              taskListStatus="todo"
                              tasks={tasks}
                              increasePriority={increasePriority}
                              decreasePriority={decreasePriority}
                              deleteTask={deleteTask}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="IN PROGRESS"
                              taskListStatus="in progress"
                              tasks={tasks}
                              increasePriority={increasePriority}
                              decreasePriority={decreasePriority}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="RESOLVED"
                              taskListStatus="resolved"
                              tasks={tasks}
                              increasePriority={increasePriority}
                              decreasePriority={decreasePriority}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}
                              moveTaskRight={moveTaskRight}/>
                    <TaskList taskListName="CLOSED"
                              taskListStatus="closed"
                              tasks={tasks}
                              increasePriority={increasePriority}
                              decreasePriority={decreasePriority}
                              deleteTask={deleteTask}
                              moveTaskLeft={moveTaskLeft}/>
                </div>
            </div>
        </div>
    );
}

export default App;