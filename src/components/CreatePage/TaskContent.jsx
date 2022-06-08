/* eslint-disable react/button-has-type */
import './TaskContent.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// eslint-disable-next-line import/named
import { format } from 'date-fns'
import { BasicDatePicker } from './BasicDatePicker'

export function TaskContent() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  function resetForm() {
    setName('')
    setCategory('')
    setDate('')
    setComment('')
    navigate('/')
  }

  const onHandleSubmit = async (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: '1', name, category, date, comment }),
    }

    const response = await fetch(
      'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/tasks',
      requestOptions
    )
    const parsedResponse = await response.json()
    console.log(parsedResponse)
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
          onChange={(event) => setName(event.target.value)}
        />
        <div className="label">
          <p className="pLabel">Label</p>
          <input
            placeholder="Empty"
            className="inputLabel"
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="date">
          <p className="pDate">Due Date</p>
          <BasicDatePicker
            onChange={(newDate) => {
              const formatDate = format(newDate, 'dd/MM/yyyy')
              setDate(formatDate)
            }}
          />
        </div>
        <input
          placeholder="Add a comment"
          className="inputComment"
          onChange={(event) => setComment(event.target.value)}
        />
        <div className="containerButtons">
          <button
            type="reset"
            className="cancelButton"
            onClick={() => resetForm()}
          >
            Cancel
          </button>
          <button type="submit" className="saveButton" onClick={onHandleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
