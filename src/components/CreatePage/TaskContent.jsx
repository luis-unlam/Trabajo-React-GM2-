import './TaskContent.css'
import { NavLink } from 'react-router-dom'

export function TaskContent() {
  return (
    <div className="taskContent">
      <NavLink to="/" className="navButton">
        <button type="button" className="backButton">
          <i className="fa-solid fa-arrow-left fa-2xl" />
        </button>
      </NavLink>
      <form className="formTaskContent">
        <input placeholder="Untitled" className="inputTitle" />
        <div className="label">
          <p className="pLabel">Label</p>
          <input placeholder="Empty" className="inputLabel" />
        </div>
        <div className="date">
          <p className="pDate">Due Date</p>
          <input placeholder="Empty" className="inputDate" />
        </div>
        <input placeholder="Add a comment" className="inputComment" />
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
