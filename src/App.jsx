import { useState, useContext } from "react";

import { TaskContext } from "./context/TaskContext";

import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from "./components/Filter/Filter";

import "./App.css";


function App(){


const [search,setSearch]=useState("");

const [filter,setFilter]=useState("all");

const [category,setCategory]=useState("all");


const { tasks = [] } = useContext(TaskContext);


const completed =
tasks.filter(task=>task.completed).length;


const pending =
tasks.length-completed;


return (

<div className="container">




<Header/>

<div className="stats">

<p>Total: {tasks.length}</p>

<p>Completed: {completed}</p>

<p>Pending: {pending}</p>

</div>

<TaskForm/>


<SearchBar
search={search}
setSearch={setSearch}
/>


<Filter
filter={filter}
setFilter={setFilter}
category={category}
setCategory={setCategory}
/>


<TaskList
search={search}
filter={filter}
category={category}
/>


</div>

);


}


export default App;