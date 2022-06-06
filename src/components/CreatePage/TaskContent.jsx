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
    console.log(name, label, date, comment)
  }

  function resetForm() {
    setName('')
    setLabel('')
    setDate('')
    setComment('')
  }

  /*

  async postData() {

    try {
      const result = fetch(
        'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/tasks',
        {
          method: 'post',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-type': 'aplication/json',
          },
          body: JSON.stringify({
            key: 'id',
          })
        }
      )

      console.log(result)

    } catch (error) {
      console.log(error)
    }
  };
  */

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
          <button type="submit" className="saveButton" onClick={onHandleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
