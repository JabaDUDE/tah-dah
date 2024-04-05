
import React from 'react'

export const TaskList = ({ DoneDids }) => {
  return (
    <div>
    {DoneDids.map((task) => {
        return(
            <li key={task.id} value={task.name}>{task.name}</li>
        )
    })}</div>
  )
}

