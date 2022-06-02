import './EditContent.css'

export function EditContent() {
  return (
    <div className="editContent">
      <form className="formTaskContent">
        <input placeholder="Untitled" className="inputTitle" />
        <div className="ItemContentEdit">
          <input placeholder="Label" className="inputLabelEdit" />
          <input placeholder="Groceries" className="Label_task" />
        </div>
        <div className="ItemContentEdit">
          <input placeholder="Due Date" className="inputDateEdit" />
          <input placeholder="xx/xx/xx" className="Due_task" />
        </div>
        <input placeholder="" className="inputCompleteEdit" />
        <p className="inputCommentEdit">Add a comment</p>
        <input placeholder="" className="inputCompleteEdit" />

        <button type="button" className="cancelButtonEdit">
          Cancel
        </button>
        <button type="button" className="saveButton">
          Save
        </button>
      </form>
    </div>
  )
}
