
import React from 'react'

export const TaskList = ({ doneDids }) => {
  return (
    <div>
    {doneDids.map((task) => {
        return(
            <li key={task.id} value={task.name}>{task.name}</li>
        )
    })}</div>
  )
}

