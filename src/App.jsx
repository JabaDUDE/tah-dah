import { useState } from 'react'
import { UserInput } from './UserInput'

import './App.css'

  //takes the user input and returns a lowercase string with first letter capitalized before displaying it
export const fixString = (task) => {
    let newString = task.toLowerCase()
    let string = newString.trim()
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

export const App = () => {

  const [doneTask, setDoneTask] = useState('')
  const [doneDids, setDoneDids] = useState([])

  // //takes the user input and returns a lowercase string with first letter capitalized before displaying it
  // const fixString = (task) => {
  //   let string = task.toLowerCase()
  //   return string.charAt(0).toUpperCase() + string.slice(1)
  // }

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


  
