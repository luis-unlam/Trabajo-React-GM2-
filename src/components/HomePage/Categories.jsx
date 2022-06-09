import './Categories.css'
import { useEffect, useState } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function Categories() {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setTodos(resultTodos)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <nav className="categoriesTask">
      <ul className="ul_items">
        <h4 className="ALL">All</h4>
        <li className="li_items">
          {todos.map((todo) => (
            <h4 className="categoriesTask_item" key={todo.id}>
              {todo.category}
            </h4>
          ))}
        </li>
      </ul>
    </nav>
  )
}
