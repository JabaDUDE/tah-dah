
import React from 'react'

export const TaskList = ({ doneDids }) => {
  return (
    <div>
    {doneDids.map(({ id, title, description }) => {
        return(
            <li key={id} value={title}>
            <div>
              <h2>{title}</h2>
            </div>
            {!description ? null : <p>{description}</p>}
            </li>
        )
    })}</div>
  )
}

