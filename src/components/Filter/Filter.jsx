import "./Filter.css";
import { FaChevronDown } from "react-icons/fa";

function Filter({
filter,
setFilter,
category,
setCategory
}){

return(
  <div className="filters">

    <div className="select-wrapper">
      <select
        value={filter}
        onChange={(e)=>setFilter(e.target.value)}
      >
        <option>All Tasks</option>
        <option>Completed</option>
        <option>Pending</option>
      </select>

      <FaChevronDown className="select-icon"/>
    </div>


    <div className="select-wrapper">

      <select
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
      >
        <option>All Categories</option>
        <option>Study</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Shopping</option>
      </select>

      <FaChevronDown className="select-icon"/>

    </div>

  </div>
)}
export default Filter;