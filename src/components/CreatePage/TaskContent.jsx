/* eslint-disable react/button-has-type */
import './TaskContent.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export function TaskContent() {
  const [name, setName] = useState('')
  const [label, setLabel] = useState('')
  const [date, setDate] = useState('')
  const [comment, setComment] = useState('')

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '1', name, label, date, comment }),
    }

    fetch(
      'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/tasks',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
  }

  function resetForm() {
    setName('')
    setLabel('')
    setDate('')
    setComment('')
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
          onChange={(event) => setName(event.target.value)}
        />
        <div className="label">
          <p className="pLabel">Label</p>
          <input
            placeholder="Empty"
            className="inputLabel"
            onChange={(event) => setLabel(event.target.value)}
          />
        </div>
        <div className="date">
          <p className="pDate">Due Date</p>
          <input
            placeholder="Empty"
            className="inputDate"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <input
          placeholder="Add a comment"
          className="inputComment"
          onChange={(event) => setComment(event.target.value)}
        />
        <div className="containerButtons">
          <NavLink className="navButton" to="/">
            <button
              type="reset"
              className="cancelButton"
              onClick={() => resetForm()}
            >
              Cancel
            </button>
          </NavLink>
          <NavLink className="navButton" to="/">
            <button
              type="submit"
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
