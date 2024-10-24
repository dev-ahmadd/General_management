// App.js
import React, { useState } from 'react';
import TaskForm from './Components/Taskform';
import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => task !== taskToDelete));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
