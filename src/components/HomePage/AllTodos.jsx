/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './AllTodos.css'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function AllTodos({ todos, onHandleDelete }) {
  const [allTodos, setAllTodos] = useState([])
  const [isCompleted, setIsCompleted] = useState(todos.completed)

  const getTodos = async () => {
    const data = await fetch(`${url}tasks/${id}`)
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
    }
    fetch(`${url}tasks/12`, requestOptions) // aca habria que pasarle el todo.id por el 12
      .then((response) => response.json())
      .then((data) => (element.innerHTML = data.updatedAt))
    navigate('/editPage')
  }

  const calcDate = () => {
    const dateTask = new Date()
    const actualDate = new Date()
    if (dateTask > actualDate) {
      setLateTask(true)
    } else {
      setLateTask(false)
    }
    if (pas === false) {
      const element = document.querySelector('#put-request .date-updated')
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: false }),
      }

      fetch(`${url}tasks/12`, requestOptions)
        .then((response) => response.json())
        .then((data) => (element.innerHTML = data.updatedAt))
    }

    function onHandleEdit(todo) {
      fetch(`${url}tasks/${todo.id}`, {
        method: 'PUT',
      }).then((result) => {
        result.json().then((resp) => {})
      })

      navigate('/editPage')
    }

    useEffect(() => {
      getTodos()
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
                    <button
                      type="button"
                      className="editButton"
                      onClick={() => onHandleEdit(todo)}
                    >
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
}
