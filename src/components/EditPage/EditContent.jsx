import './EditContent.css'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export function EditContent() {
  const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

  const [todo, setTodo] = useState([])
  const { id } = useParams()

  const obtenerTodo = async () => {
    const data = await fetch(`${url}tasks/${id}`)
    const resultTodos = await data.json()
    setTodo(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
  }

  useEffect(() => {
    obtenerTodo()
  }, [])

  return (
    <div className="taskContent">
      <NavLink to="/" className="navButton">
        <button type="button" className="backButton">
          <i className="fa-solid fa-arrow-left fa-2xl" />
        </button>
      </NavLink>
      <form className="formTaskContent">
        <input
          placeholder="Untitled"
          className="inputTitle"
          defaultValue={todo.name}
        />
        <div className="label">
          <p className="pLabel">Label</p>
          <input
            placeholder="Empty"
            className="inputLabel"
            defaultValue={todo.category}
          />
        </div>
        <div className="date">
          <p className="pDate">Due Date</p>
          <input
            placeholder="Empty"
            className="inputDate"
            defaultValue={todo.date}
          />
        </div>
        <input
          placeholder="Add a comment"
          className="inputComment"
          defaultValue={todo.comment}
        />
        <div className="containerButtons">
          <NavLink className="navButton" to="/">
            <button type="button" className="cancelButton">
              Cancel
            </button>
          </NavLink>
          <button type="button" className="saveButton">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
