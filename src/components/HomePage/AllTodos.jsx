/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './AllTodos.css'
import { NavLink } from 'react-router-dom'
<<<<<<< Updated upstream
import { useState, useEffect } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function AllTodos({ todos, onHandleDelete }) {
  const [allTodos, setAllTodos] = useState([])

  const obtenerTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setAllTodos(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
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
=======
import todos from '../../json/tasks.json'
>>>>>>> Stashed changes

  return (
    <div>
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
<<<<<<< Updated upstream
          </li>
        ))}
      </ul>
    </div>
=======
            <p className="thirdp">Due date: {todo.date}</p>
            <p className="lastp">{todo.comment}</p>
          </div>
          <div className="taskButtons">
            <NavLink to="/editPage">
              <button type="button" className="editButton">
                <i className="fas fa-edit fa-edit fa-2x" />
              </button>
            </NavLink>
            <button type="button" className="deleteButton">
              <i className="fas fa-trash-alt fa-delete fa-2x" />
            </button>
          </div>
        </li>
      ))}
    </ul>
>>>>>>> Stashed changes
  )
}
