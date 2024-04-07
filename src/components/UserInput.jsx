import React from 'react'

export const UserInput = ({ doneTask, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input name='title' value={doneTask || ''} placeholder="What have you accomplished?" onChange={handleChange} />
        <button type='submit' />
    </form>
  )
}
