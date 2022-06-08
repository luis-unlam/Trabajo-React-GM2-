/* eslint-disable no-return-assign */
import './EditContent.css'
<<<<<<< Updated upstream
import { NavLink, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { EditDatePicker } from './EditDatePicker'
=======
import { NavLink } from 'react-router-dom'
>>>>>>> Stashed changes

export function EditContent() {
  const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

  const [todo, setTodo] = useState([])
  const { id } = useParams()

  const navigate = useNavigate()

  const obtenerTodo = async () => {
    const data = await fetch(`${url}tasks/${id}`)
    const resultTodos = await data.json()
    setTodo(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
  }

  const [name, setName] = useState(todo.name)
  const [category, setCategory] = useState(todo.category)
  const [date, setDate] = useState(todo.date)
  const [comment, setComment] = useState(todo.comment)

  // const onHandleEdit = (e) => {
  //   e.preventDefault()

  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ id: todo.id, name, category, date, comment }),
  //   }
  //     .then((response) => response.json())
  //     // eslint-disable-next-line no-console
  //     .then((result) => console.log(result))
  //   fetch(`${url}tasks/${id}`, requestOptions)
  // }

  useEffect(() => {
    obtenerTodo()
  }, [])

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const element = document.querySelector('#put-request .date-updated')
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '1', name, category, date, comment }),
    }

    fetch(`${url}tasks/${id}`, requestOptions)
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      // eslint-disable-next-line prettier/prettier
      .then((data) => (element.innerHTML = data.updatedAt))

    navigate('/')
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
          <EditDatePicker
            onChange={(newDate) => {
              const formatDate = format(newDate, 'dd/MM/yyyy')
              setDate(formatDate)
            }}
            dueDate={todo.date}
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
          <button type="button" className="saveButton" onClick={onHandleSubmit}>
            Save
          </button>
        </div>
        <input placeholder="Untitled" className="inputTitle" />
        <div className="ItemContentEdit">
          {/* <input placeholder="Label" className="inputLabelEdit" /> */}
          <p className="pLabel">Label</p>
          <input placeholder="Groceries" className="Label_task" />
        </div>
        <div className="ItemContentEdit">
          {/* <input placeholder="Due Date" className="inputDateEdit" /> */}
          <p className="pLabel">Due Date</p>
          <input placeholder="xx/xx/xx" className="Due_task" />
        </div>
        <input placeholder="" className="inputCompleteEdit" />
        <p className="inputCommentEdit">Add a comment</p>
        <input placeholder="" className="inputCompleteEdit" />

        <NavLink className="navButtonEdit" to="/">
          <button type="button" className="backButton">
            Back
          </button>
        </NavLink>
        <button type="button" className="cancelButtonEdit">
          Cancel
        </button>
        <button type="button" className="saveButton">
          Save
        </button>
      </form>
    </div>
  )
}
