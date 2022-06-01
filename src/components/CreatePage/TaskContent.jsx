import './TaskContent.css'

export function TaskContent() {
  return (
    <div className="taskContent">
      <form className="formTaskContent">
        <input placeholder="Untitled" className="inputTitle" />
        <input placeholder="Label" className="inputLabel" />
        <input placeholder="Due Date" className="inputDate" />
        <input placeholder="Add a comment" className="inputComment" />
      </form>
    </div>
  )
}
