import './ViewTasks.css'
import { NavLink } from 'react-router-dom'

export function ViewTasks() {
  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <input placeholder="Buscar" className="inputTask" />
      <button type="button" className="buttonNewTask">
        <NavLink className="navButton" to="/createPage">
          +
        </NavLink>
      </button>
    </form>
  )
}
