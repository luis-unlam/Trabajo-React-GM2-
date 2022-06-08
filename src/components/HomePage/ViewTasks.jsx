/* eslint-disable consistent-return */
import './ViewTasks.css'
import { NavLink } from 'react-router-dom'
import { AllTodos } from './AllTodos'

export function ViewTasks() {
  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <div className="containerAllTodos">
        <AllTodos />
      </div>
      <NavLink to="/createPage">
        <button type="button" className="buttonNewTask">
          +
        </button>
      </NavLink>
    </form>
  )
}
