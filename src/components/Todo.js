import React,{useState} from "react";


const Todo = ({task})=>{

    function handleDeleteBtn(e){
         e.target.parentElement.remove();
         console.log(task);
         
    }

    return (
        <div>
           
            {
                task.length ? task.map((list)=>{
                    return( 
                    <div className="task"> 
                       <p> {list} </p>
                       <button onClick={handleDeleteBtn} >Delete</button>
                    </div> )
                }) : null
            }
           
        </div>
    )
}

export default Todo;