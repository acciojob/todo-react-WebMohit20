import React,{useState} from "react";


const Task = ( {task,setTask} )=>{
    let [data,setData] = useState("");
    function handleTask(e){
        e.preventDefault();
        setTask([...task,data])
        setData("")
    }
    function getData(e){
        setData(e.target.value)
    }
    return (
        <div>
            <form onSubmit={ handleTask }>
                <input type="text" onChange={getData}  value={data}/>
                <button >Add Todo</button>
            </form>
        </div>
    )
}

export default Task;