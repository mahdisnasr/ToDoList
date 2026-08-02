import "./Filter.css";
import { FaChevronDown } from "react-icons/fa";

function Filter({
  filter,
  setFilter,
  category,
  setCategory,
}) {
  return (
    <div className="filters">

      <div className="select-wrapper">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <FaChevronDown className="select-icon" />
      </div>

      <div className="select-wrapper">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>

        <FaChevronDown className="select-icon" />
      </div>

    </div>
  );
}

export default Filter;