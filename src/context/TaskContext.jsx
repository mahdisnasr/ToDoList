import { createContext, useReducer, useEffect } from "react";
import taskReducer from "../reducer/taskReducer";
import useLocalStorage from "../hooks/useLocalStorage";


export const TaskContext = createContext();


function TaskProvider({children}){


const [savedTasks, setSavedTasks] = useLocalStorage(
  "tasks",
  []
);


const [tasks, dispatch] = useReducer(
  taskReducer,
  savedTasks
);


useEffect(()=>{

  setSavedTasks(tasks);

},[tasks, setSavedTasks]);



return (

<TaskContext.Provider value={{tasks, dispatch}}>

{children}

</TaskContext.Provider>

)

}


export default TaskProvider;