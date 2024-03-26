import { useState } from 'react'
import { UserInput } from './UserInput'

import './App.css'

function App() {
  const [doneTask, setDoneTask] = useState('')
  const [doneDids, setDoneDids] = useState([])

  const fixString = (task) => {
    let string = task.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const addDoneTask = () => {
    //get randomized number for id
    let id = Math.random() * 100000
    if(doneTask.trim() !== ''){
      let task = fixString(doneTask)
      setDoneDids((oldList) => [...oldList, {
        id: id,
        task: task,
      }])
      setDoneTask('')
    }
  }

  return (
    <>
      <UserInput setDoneTask={setDoneTask} doneTask={doneTask} addDoneTask={addDoneTask} />
    </>
  )
}

export default App
