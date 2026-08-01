import {useContext,useState} from "react";
import {TaskContext} from "../../context/TaskContext";
import "./TaskItem.css";
import {FaTrash,FaEdit,FaSave} from "react-icons/fa";


function TaskItem({task}){


const {dispatch}=useContext(TaskContext);


const [edit,setEdit]=useState(false);

const [value,setValue]=useState(task.title);



function saveEdit(){

dispatch({

type:"EDIT_TASK",

payload:{

...task,

title:value

}

});


setEdit(false);

}



return(

<div className="task-item">


<div>


<input

type="checkbox"

checked={task.completed}

onChange={()=>dispatch({

type:"TOGGLE_TASK",

payload:task.id

})}

/>



{
edit

?

<input

value={value}

onChange={(e)=>setValue(e.target.value)}

/>


:

<span className={task.completed?"done":""}>

{task.title}

</span>

}


<p>{task.category}</p>


</div>



<div>


<button onClick={()=>{

edit ? saveEdit() : setEdit(true)

}}>

{edit?"Save":"Edit"}

</button>



<button onClick={()=>{

edit ? saveEdit() : setEdit(true)

}}>

{
edit 
?
<FaSave/>
:
<FaEdit/>
}

</button>


<button
className="delete"
onClick={()=>dispatch({

type:"DELETE_TASK",

payload:task.id

})}
>

<FaTrash/>

</button>


</div>


</div>


)


}


export default TaskItem;