import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { FaChevronDown } from "react-icons/fa";
import "./TaskForm.css";

function TaskForm(){

const {dispatch}=useContext(TaskContext);

const [title,setTitle]=useState("");
const [category,setCategory]=useState("Study");
const [error,setError]=useState("");


function submitHandler(e){

e.preventDefault();


if(title.trim().length < 3){

setError("Task must be at least 3 characters");

return;

}


dispatch({

type:"ADD_TASK",

payload:{
id:Date.now(),
title:title,
category:category,
completed:false
}

});


setTitle("");

setError("");

}



return(

<form className="task-form" onSubmit={submitHandler}>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

placeholder="Enter task"

/>

<div className="select-wrapper">

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
<option>Study</option>
<option>Work</option>
<option>Personal</option>
<option>Shopping</option>
</select>

<FaChevronDown className="select-icon"/>

</div>


<button>Add Task</button>


{
error && <p className="error">{error}</p>
}


</form>


)

}


export default TaskForm;