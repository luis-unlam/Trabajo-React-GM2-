/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './AllTodos.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function AllTodos() {
  const [todos, setTodos] = useState([])

  const obtenerTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setTodos(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
  }

  function onHandleDelete(id) {
    fetch(`${url}tasks/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        obtenerTodos()
      })
    })
  }

  function onHandleEdit(todo) {
    fetch(`${url}tasks/${todo.id}`, {
      method: 'PUT',
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })

    return resp
  }

  useEffect(() => {
    obtenerTodos()
  }, [])

  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li className="todos" key={todo.id}>
          <div className="inputCheckTodoContainer">
            <input type="checkbox" className="inputCheckTodo" />
          </div>
          <div className="completeTask">
            <div className="infoTask">
              <div className="taskFirstRow">
                <p>{todo.name}</p>
                <span>{todo.category}</span>
              </div>
              <p className="thirdp">Due date: {todo.date}</p>
              <p className="lastp">{todo.comment}</p>
            </div>
            <div className="taskButtons">
              <NavLink to="/editPage">
                <button
                  type="button"
                  className="editButton"
                  onClick={() => onHandleEdit(todo)}
                >
                  <i className="fas fa-edit fa-edit fa-2x" />
                </button>
              </NavLink>
              <NavLink to="/">
                <button
                  type="submit"
                  className="deleteButton"
                  onClick={() => onHandleDelete(todo.id)}
                >
                  <i className="fas fa-trash-alt fa-delete fa-2x" />
                </button>
              </NavLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
