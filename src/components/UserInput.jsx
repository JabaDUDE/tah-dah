import React from 'react'

export const UserInput = ({ doneTask, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
        name='title' 
        value={doneTask.title || ''} 
        placeholder="What have you accomplished?" 
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
            <button type='submit' />
          </>
        )}
    </form>
  )
}
