import './Task.css'

// eslint-disable-next-line import/prefer-default-export
export function Task() {
  return (
    <div className="containerTask">
      <div className="categoriesTask">
        <h4 className="categoriesTask_item">All</h4>
        <h4 className="categoriesTask_item">Groceries</h4>
        <h4 className="categoriesTask_item">College</h4>
        <h4 className="categoriesTask_item">Payments</h4>
      </div>
      <form className="formTask">
        <h1>All Tasks</h1>
        <input placeholder="Buscar" className="inputTask" />
      </form>
    </div>
  )
}
