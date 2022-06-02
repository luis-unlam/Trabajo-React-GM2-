import './ViewTasks.css'
<<<<<<< Updated upstream
import { NavLink } from 'react-router-dom'
=======
import { AllTodos } from './AllTodos'
>>>>>>> Stashed changes

export function ViewTasks() {
  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <input placeholder="Buscar" className="inputTask" />
      <AllTodos />
      <button type="button" className="buttonNewTask">
        <NavLink className="navButton" to="/createPage">
          +
        </NavLink>
      </button>
    </form>
  )
}
