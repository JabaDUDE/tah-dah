import React from 'react'
//button stling needs work: width at regular screen size seems small and on mobile sizes, interferes with text in description box
export const UserInput = ({ doneTask, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
        name='title' 
        value={doneTask.title || ''} 
        placeholder="What have you done?" 
        onChange={handleChange} 
        />
        {!doneTask.title ? null : (
          <>
            <textarea 
            name='description' 
            value={doneTask.description || ''} 
            onChange={handleChange} 
            placeholder='Details...' 
            />
            <button type='submit'>Add Task</button>
          </>
        )}
    </form>
  )
}
