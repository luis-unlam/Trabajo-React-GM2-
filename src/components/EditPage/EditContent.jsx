import './EditContent.css'
import { NavLink } from 'react-router-dom'
import todos from '../../json/tasks.json'

const todo = { todos }

export function EditContent() {
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

        <NavLink className="navButton" to="/">
          <button type="button" className="cancelButton">
            Cancel
          </button>
        </NavLink>
        <button type="button" className="saveButton">
          Save
        </button>
      </form>
    </div>
  )
}
