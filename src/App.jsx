import { useState } from 'react'
import { UserInput } from './components/UserInput'
import { TaskList } from './components/TaskList'

import './App.css'



  //takes the user input and returns a lowercase string with first letter capitalized before displaying it
export const fixString = (name,value) => {

    let newString = value.toLowerCase()
    //uppercases first letter of every sentence, with a period, exclamation, question mark
    if (name === 'description'){
      return newString.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase())
    }
    return newString.charAt(0).toUpperCase() + newString.slice(1)
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
      const newValue = fixString(name,value)
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
  
