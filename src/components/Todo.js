import React,{useState} from "react";


const Todo = ({task})=>{

    function handleDeleteBtn(e){
         e.target.parentElement.remove();
         console.log(task);
         
    }

    return (
        <div>
           <ul>
            {
                task.length ? task.map((list)=>{
                    return( 
                    <li className="task"> 
                       <p> {list} </p>
                       <button onClick={handleDeleteBtn} >Delete</button>
                    </li> )
                }) : null
            }
           </ul>
        </div>
    )
}

export default Todo;