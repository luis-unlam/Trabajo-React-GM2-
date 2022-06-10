/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './AllTodos.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function AllTodos({ todos, onHandleDelete }) {
  const [allTodos, setAllTodos] = useState([])
  const [isCompleted, setIsCompleted] = useState(todos.completed)
  const [ids, setIds] = useState([])

  const getIds = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    const tasksIds = resultTodos.map((element) => element.id)
    setIds(tasksIds)
  }

  const getTodos = async () => {
    const data = await fetch(`${url}tasks/`)
    const resultTodos = await data.json()
    setAllTodos(resultTodos)
  }

  const changeCompleted = (event) => {
    // e.preventDefault()
    const pas = event.target.checked

    if (pas === true) {
      const element = document.querySelector('#put-request .date-updated')
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true }),
      }

      fetch(`${url}tasks/1`, requestOptions) // aca habria que pasarle el todo.id por el 12
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
    } else {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: false }),
      }

      fetch(`${url}tasks/1`, requestOptions) // aca habria que pasarle el todo.id por el 12
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
    }
  }

  useEffect(() => {
    getTodos()
    getIds()
  }, [])

  useEffect(() => {
    setIsCompleted()
  }, [])

  return (
    <div>
      <ul className="allTodos">
        {todos.map((todo) => (
          <li className="todos" key={todo.id}>
            <div className="inputCheckTodoContainer">
              <input
                type="checkbox"
                className="inputCheckTodo"
                defaultChecked={todo.completed}
                onChange={changeCompleted} // de aca deberiamos pasar el todo.id
              />
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
                <Link to={`/editPage/${todo.id}`}>
                  <button type="button" className="editButton">
                    <i className="fas fa-edit fa-edit fa-2x" />
                  </button>
                </Link>
                <button
                  type="button"
                  className="deleteButton"
                  onClick={() => onHandleDelete(todo.id)}
                >
                  <i className="fas fa-trash-alt fa-delete fa-2x" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
