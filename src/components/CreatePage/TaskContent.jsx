import './TaskContent.css'

export function TaskContent() {
  return (
    <div className="taskContent">
      <button type="button" className="backButton">
        Back
      </button>
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

        <button type="button" className="cancelButton">
          Cancel
        </button>
        <button type="button" className="saveButton">
          Save
        </button>
      </form>
    </div>
  )
}
