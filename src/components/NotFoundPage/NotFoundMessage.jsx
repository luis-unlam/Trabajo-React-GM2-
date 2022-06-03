/* eslint-disable react/button-has-type */
import './NotFoundMessage.css'
import { NavLink } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="notFoundContent">
      <NavLink to="/" className="navButton">
        <button type="button" className="backButton">
          <i className="fa-solid fa-arrow-left fa-2xl" />
        </button>
      </NavLink>
      <div className="notFoundTitleAndMessage">
        <h1 className="notFoundTitle">404 Not Found</h1>
        <p className="notFoundMessage">
          The task you are looking for doesnt exist
        </p>
        <div className="falseTask">Enter a valid URL</div>
      </div>
    </div>
  )
}
