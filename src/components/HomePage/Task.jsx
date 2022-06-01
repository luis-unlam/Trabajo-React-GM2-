import './Task.css'

// eslint-disable-next-line import/prefer-default-export
export function Task() {
  return (
    <div className="containerTask">
      <div className="categoriesTask">
        <h4>All</h4>
        <h4>Groceries</h4>
        <h4>College</h4>
        <h4>Payments</h4>
      </div>
      <form className="formTask">
        <h1>All Tasks</h1>
        <input placeholder="Buscar" className="inputTask" />
      </form>
    </div>
  )
}
