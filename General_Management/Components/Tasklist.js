// components/TaskList.js
import React from 'react';
import TaskItem from './Taskitem';

const TaskList = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} deleteTask={deleteTask} />
            ))}
        </ul>
    );
};

export default TaskList;
