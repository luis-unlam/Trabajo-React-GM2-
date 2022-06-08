/* eslint-disable consistent-return */
import { useState, useEffect } from 'react'
import './ViewTasks.css'
import { NavLink } from 'react-router-dom'
import { AllTodos } from './AllTodos'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function ViewTasks() {
  const [search, setSearch] = useState('')
  const [todos, setTodos] = useState([])

  const obtenerTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setTodos(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
  }

  const onHandleDelete = (id) => {
    fetch(`${url}tasks/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })

    const todosFiltered = todos.filter((todo) => todo.id !== id)
    setTodos(todosFiltered)
  }

  useEffect(() => {
    obtenerTodos()
  }, [])

  let results = []
  if (!search) {
    results = todos
    console.log(results)
  } else {
    console.log(search)
    results = todos.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  const searcher = (e) => {
    setSearch(e.target.value)
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
        <AllTodos todos={results} onHandleDelete={onHandleDelete} />
      </div>
      <NavLink to="/createPage/">
        <button type="button" className="buttonNewTask">
          +
        </button>
      </NavLink>
    </form>
  )
}
