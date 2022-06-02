import './AllTodos.css'
import todos from '../../json/tasks.json'

export function AllTodos() {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li className="todos" key={todo.id}>
          <div className="infoTask">
            <div className="taskFirstRow">
              <p>{todo.name}</p>
              <p>{todo.category}</p>
            </div>
            <p className="thirdp">Due date: {todo.date}</p>
            <p className="lastp">{todo.comment}</p>
          </div>
          <div className="taskButtons">
            <button type="button" className="editButton">
              <i className="fas fa-edit fa-edit fa-2x" />
            </button>
            <button type="button" className="deleteButton">
              <i className="fas fa-trash-alt fa-delete fa-2x" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
