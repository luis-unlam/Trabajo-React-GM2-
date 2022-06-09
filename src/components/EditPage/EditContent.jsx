/* eslint-disable no-return-assign */
import './EditContent.css'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { EditDatePicker } from './EditDatePicker'

export function EditContent() {
  const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

  const [todo, setTodo] = useState([])
  const { id } = useParams()
  const [name, setName] = useState(todo.name)
  const [category, setCategory] = useState(todo.category)
  const [date, setDate] = useState(todo.date)
  const [comment, setComment] = useState(todo.comment)

  const navigate = useNavigate()

  function resetForm() {
    setName('')
    setCategory('')
    setDate('')
    setComment('')
    navigate('/')
  }

  const getTodo = async () => {
    const data = await fetch(`${url}tasks/${id}`)
    const resultTodos = await data.json()
    setTodo(resultTodos)
  }

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
    getTodo()
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
      .then((data) => (element.innerHTML = data.updatedAt))

    navigate('/')
  }

  return (
    <div className="taskContent">
      <button type="button" className="backButton" onClick={() => resetForm()}>
        <i className="fa-solid fa-arrow-left fa-2xl" />
      </button>
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
          <button
            type="button"
            className="cancelButton"
            onClick={() => resetForm()}
          >
            Cancel
          </button>
          <button type="button" className="saveButton" onClick={onHandleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
