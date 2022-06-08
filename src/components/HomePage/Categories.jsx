import './Categories.css'
import { useEffect, useState } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function Categories() {
  const [todos, setTodos] = useState([])

  const obtenerTodos = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    setTodos(resultTodos)
    // eslint-disable-next-line no-console
    console.log(resultTodos)
  }

  useEffect(() => {
    obtenerTodos()
  }, [])

  return (
    <nav className="categoriesTask">
      <ul className="ul_items">
        <h4 className="ALL">ALL</h4>
        <li className="li_items">
          {todos.map((todo) => (
            <h4 className="categoriesTask_item">{todo.category}</h4>
          ))}
        </li>
      </ul>
    </nav>
  )
}
