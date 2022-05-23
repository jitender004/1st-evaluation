import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [todo,setTodo] = useState("");
  const [data,setData] = useState([]);
   
  const handleChange = (e)=>{
    e.preventDefault();
      setTodo(e.target.value)
  }
  const handleClick = (e)=>{
    e.preventDefault();
    if (!todo) return;
     setData([...data,{value:todo}]);
     setTodo(""); 
    //  console.log(setData);
     
  }
  
  return (
    <>
        <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task..." onChange={handleChange} value={todo} />
      <button data-cy="add-task-button" onClick={handleClick}>+</button>
    </div>
    <div className={styles.todo}>
    {data.map((item,index)=> <Tasks todo={item.value} key={index} />) }
    </div>
 </>
  );
};

export default AddTask;
