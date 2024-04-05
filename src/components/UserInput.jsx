import React from 'react'

export const UserInput = ({ doneTask, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input name='title' value={doneTask || ''} placeholder="What have you accomplished?" onChange={handleChange} />
        {!doneTask ? null : (
          <>
            <textarea name='description' placeholder='details' value={doneTask.description || ''} onChange={handleChange} />
        <button type='submit'>Add</button>
          </>
        )}
    </form>
  )
}
