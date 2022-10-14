
import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const[taskName,setTaskName]=useState("")
  const[taskList,setTaskList]=useState([])
  const add=()=>{
    setTaskList([...taskList,{task:taskName}])
    setTaskName('')
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <label>Task Name:</label><br></br>
      <input type="text" id="task" onChange={(e)=>{ 
        setTaskName(e.target.value);}}/><br></br>
      

      <button onClick={add}>Add</button>
      {taskList.map((task)=>{
        return <Task taskName={task.task} />
      })}
    </div>
  );
}

export default App;
