import './Categories.css'
import { useEffect, useState } from 'react'

const url = 'https://6297eb2e8d77ad6f750aadac.mockapi.io/api/v1/'

export function Categories() {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const data = await fetch(`${url}tasks`)
    const resultTodos = await data.json()
    const tasksCategories = resultTodos.map((element) => element.category)
    const filteredCategories = []
    tasksCategories.forEach((element) => {
      if (!filteredCategories.includes(element)) {
        filteredCategories.push(element)
      }
    })
    setCategories(filteredCategories)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <nav className="categoriesTask">
      <ul className="ul_items">
        <h4 className="ALL">All</h4>
        <li className="li_items">
          {categories.map((category) => (
            <h4 className="categoriesTask_item" key={category}>
              {category}
            </h4>
          ))}
        </li>
      </ul>
    </nav>
  )
}
