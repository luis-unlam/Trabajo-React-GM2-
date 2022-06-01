import './Task.css'
import { ViewTasks } from './ViewTasks'
import { Categories } from './Categories'

export function Task() {
  return (
    <div className="containerTask">
      <Categories />
      <ViewTasks />
    </div>
  )
}
