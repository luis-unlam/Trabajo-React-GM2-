import './ViewTasks.css'

export function ViewTasks() {
  return (
    <form className="formTask">
      <h1>All Tasks</h1>
      <input placeholder="Buscar" className="inputTask" />
      <button type="button" className="buttonNewTask">
        +
      </button>
    </form>
  )
}
