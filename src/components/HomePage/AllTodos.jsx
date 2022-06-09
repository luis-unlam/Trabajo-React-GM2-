/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './AllTodos.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { act } from 'react-dom/test-utils'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function AllTodos({ todos, onHandleDelete }) {
  const [allTodos, setAllTodos] = useState([])
  const [lateTask, setLateTask] = useState(false)

  const getTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setAllTodos(resultTodos)
  }

  const calcDate = () => {
    const dateTask = new Date()
    const actualDate = new Date()
    if (dateTask > actualDate) {
      console.log('te pasaste')
      setLateTask(true)
    } else {
      setLateTask(false)
      console.log('no te pasaste')
    }
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
    getTodos()
    calcDate()
  }, [])

  return (
    <div>
      <ul className="allTodos">
        {todos.map((todo) => (
          <li className="todos" key={todo.id}>
            <div className="inputCheckTodoContainer">
              <input type="checkbox" className="inputCheckTodo" />
            </div>
            <div className={lateTask ? 'todosLate' : 'completeTask'}>
              <div className="infoTask">
                <div className="taskFirstRow">
                  <p>{todo.name}</p>
                  <span>{todo.category}</span>
                </div>
                <p className="thirdp">Due date: {todo.date}</p>
                <p className="lastp">{todo.comment}</p>
              </div>
              <div className="taskButtons">
                <NavLink to={`/editPage/${todo.id}`}>
                  <button
                    type="button"
                    className="editButton"
                    onClick={() => onHandleEdit(todo)}
                  >
                    <i className="fas fa-edit fa-edit fa-2x" />
                  </button>
                </NavLink>
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
