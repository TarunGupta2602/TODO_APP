import React from 'react'
import { useState } from 'react'
import './App.css'; // Import the CSS file


const App = () => {
  const[tasks, setTasks]= useState(["Go to work","Movie","Coding"]);
  const[newTasks,setNewTasks]= useState("");

function handeleventchange(event){
  setNewTasks(event.target.value);
}

function addTask(){
  if (newTasks.trim() !== "") {
    setTasks([...tasks, newTasks]);
    setNewTask("");
  }
}

function deleteTask(index) {
  const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
  setTasks(updatedTasks);
}
  return (
    <>
    <div>
      <h1>Todo List</h1>
      <input type="text" value={newTasks} placeholder='Enter a Task' onChange={handeleventchange} />
      <button className='add' onClick={addTask}>Add</button>
    </div>
    <div>
      <ol>
        {tasks.map((tasks,index)=>
        <li key={index}> 
          <span className='text'>{tasks}</span> 
          <button className='Delete' onClick={()=>deleteTask(index)}>Delete</button>
        </li>
         ) }
      </ol>
    </div>
    </>
  )
}

export default App
