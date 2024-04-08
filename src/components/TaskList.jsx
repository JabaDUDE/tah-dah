
import React from 'react'

export const TaskList = ({ doneDids }) => {
  return (
    <div>
    {doneDids.map(({ id, title}) => {
        return(
            <li key={id} value={title}>{title}</li>
        )
    })}</div>
  )
}

