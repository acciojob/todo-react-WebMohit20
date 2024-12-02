
import React,{useState} from "react";
import './../styles/App.css';
import Task from "./Task"
import Todo from "./Todo";
const App = () => {

  let [task,setTask] = useState([]); 
  return (
    <div>
        <Task task={task} setTask={setTask} />
        <Todo task={task}  />
    </div>
  )
}

export default App
