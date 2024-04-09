import { useState } from 'react'
import { UserInput } from './components/UserInput'
import { TaskList } from './components/TaskList'

import './App.css'
//TODO: bug where user cannot type with spaces


  //takes the user input and returns a lowercase string with first letter capitalized before displaying it
export const fixString = (task) => {
  //TODO: account for task title vs task description
    let newString = task.toLowerCase()
    let string = newString.trim()
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

const App = () => {

  const [doneTask, setDoneTask] = useState({})
  const [doneDids, setDoneDids] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!doneTask.title) return;
    setDoneDids((prev) => [doneTask, ...prev])
    setDoneTask({})
  }

  //fixString()
  const handleChange = ({target}) => {
    const { name, value } = target
    const newValue = fixString(value)
    setDoneTask((prev) => ({...prev, id: Date.now(), [name]: newValue}))
  }

  return (
    <main>
      <h1>Ta-Dah!</h1>
      <UserInput handleSubmit={handleSubmit} handleChange={handleChange} doneTask={doneTask} />
      <TaskList doneDids={doneDids} />
    </main>
  )
}

export default App
  
