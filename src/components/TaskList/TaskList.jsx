import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

function TaskList({ search, filter, category = "all" }) {

  const { tasks = [] } = useContext(TaskContext);


  const result = tasks.filter((task) => {

    const searchMatch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const statusMatch =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;


    const categoryMatch =
      category === "all"
        ? true
        : task.category === category;


    return searchMatch && statusMatch && categoryMatch;

  });


  return (

    <div>

      {
        result.length === 0

        ?

        <h3 className="empty">
          No Tasks Found
        </h3>

        :

        result.map(task => (

          <TaskItem
            key={task.id}
            task={task}
          />

        ))

      }

    </div>

  );

}

export default TaskList;