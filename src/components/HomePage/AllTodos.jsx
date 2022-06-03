import './AllTodos.css'
import { NavLink } from 'react-router-dom'
import todos from '../../json/tasks.json'

export function AllTodos() {
  return (
    <ul className="allTodos">
      {todos.map((todo) => (
        <li className="todos" key={todo.id}>
          <div className="inputCheckTodoContainer">
            <input type="checkbox" className="inputCheckTodo" />
          </div>
          <div className="completeTask">
            <div className="infoTask">
              <div className="taskFirstRow">
                <p>{todo.name}</p>
                <span>{todo.category}</span>
              </div>
              <p className="thirdp">Due date: {todo.date}</p>
              <p className="lastp">{todo.comment}</p>
            </div>
            <div className="taskButtons">
              <NavLink to="/editPage">
                <button type="button" className="editButton">
                  <i className="fas fa-edit fa-edit fa-2x" />
                </button>
              </NavLink>
              <button type="button" className="deleteButton">
                <i className="fas fa-trash-alt fa-delete fa-2x" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
