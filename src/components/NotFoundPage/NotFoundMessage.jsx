/* eslint-disable react/button-has-type */
import './NotFoundMessage.css'

export function NotFound() {
  return (
    <div className="notFoundContent">
      <button className="notFoundBackButton">Back</button>
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
