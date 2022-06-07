/* eslint-disable consistent-return */
import './ViewTasks.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AllTodos } from './AllTodos'

export function ViewTasks() {
  const [search, setSearch] = useState('')
  const [todosList, setTodosList] = useState([])

  const filter = (termSearch) => {
    // eslint-disable-next-line consistent-return
    // eslint-disable-next-line array-callback-return
    const resultSearch = todosList.filter((element) => {
      if (
        element.name.toString().toLowerCase().includes(termSearch.toLowerCase())
      ) {
        return element
      }
    })
    setTodosList(resultSearch)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
    filter(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <input
        value={search}
        onChange={searcher}
        placeholder="Buscar"
        className="inputTask"
      />
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
