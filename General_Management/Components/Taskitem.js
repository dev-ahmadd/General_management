// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask }) => {
    return (
        <li>
            {task}
            <button onClick={() => deleteTask(task)}>Delete</button>
        </li>
    );
};

export default TaskItem;