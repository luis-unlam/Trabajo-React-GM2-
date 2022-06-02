import './ViewTasks.css'
import { NavLink } from 'react-router-dom'
import { AllTodos } from './AllTodos'

export function ViewTasks() {
  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <input placeholder="Buscar" className="inputTask" />
      <AllTodos />
      <NavLink to="/createPage">
        <button type="button" className="buttonNewTask">
          +
        </button>
      </NavLink>
    </form>
  )
}
