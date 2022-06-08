import './EditContent.css'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

export function EditContent() {
  const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

  const [todo, setTodo] = useState([])
  const { id } = useParams()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [comment, setComment] = useState('')

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

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '1', name, category, date, comment }),
    }

    fetch(
      'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/tasks',
      requestOptions
    )
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((result) => console.log(result))
  }

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
          onChange={(event) => setName(event.target.value)}
        />
        <div className="label">
          <p className="pLabel">Label</p>
          <input
            placeholder="Empty"
            className="inputLabel"
            defaultValue={todo.category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="date">
          <p className="pDate">Due Date</p>
          <input
            placeholder="Empty"
            className="inputDate"
            defaultValue={todo.date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <input
          placeholder="Add a comment"
          className="inputComment"
          defaultValue={todo.comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <div className="containerButtons">
          <NavLink className="navButton" to="/">
            <button type="button" className="cancelButton">
              Cancel
            </button>
          </NavLink>
          <NavLink className="navButton" to="/">
            <button
              type="button"
              className="saveButton"
              onClick={onHandleSubmit}
            >
              Save
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  )
}
