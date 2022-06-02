import './TaskList.css'
import tasks from '../../json/tasks.json'

export function TaskList() {
  return (
    <ul className="TaskList">
      {tasks.map((task) => (
        <li className="Task">
          <p>{task.name}</p>
          <p>{task.category}</p>
          <p>{task.date}</p>
          <p>{task.comment}</p>
        </li>
      ))}
    </ul>
  )
}

// PRUEBA
