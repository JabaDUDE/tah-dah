import React from 'react'

export const UserInput = ({ setDoneTask, doneTask, addDoneTask }) => {
  return (
    <div>
        <input type="text" value={doneTask} placeholder="What have you accomplished?" onChange={(e) => setDoneTask(e.target.value)} />
        <button onClick={addDoneTask}>Add</button>
    </div>
  )
}
