'use client';

import { useState } from 'react';

const TaskManager = () => {
 const [tasks, setTasks] = useState([
   { id: 1, text: 'Read an article' },
   { id: 2, text: 'Read a book' },
   { id: 3, text: 'Write an article' },
   { id: 4, text: 'Code' },
 ]);

 // Function takes a a taskId parameter
 const deleteTask = (taskId) => {
   setTasks((currentTasks) =>
     currentTasks.filter((task) => task.id !== taskId)
   );
   console.log('Deleted task with ID:', taskId);
 };

 return (
   <div className="p-5 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
     <ul className="list-none space-y-2">
       {tasks.map((task) => (
         <li
           key={task.id}
           className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
         >
           {task.text}
           <button
             // onClick event takes a task.id argument to account for the taskId parameter of the function
             onClick={() => deleteTask(task.id)}
             className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
           >
             Delete
           </button>
         </li>
       ))}
     </ul>
   </div>
 );
};

export default TaskManager;
