import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TaskList } from './TaskList'

const tasks = [
    {
        id: Date.now(),
        name: 'read my book'
    }
]
it('should render correctly', () => {

    render(<TaskList DoneDids={tasks}/>)
    screen.debug()
})
it('should render a list of tasks', () => {

    render(<TaskList DoneDids={tasks} />)
    const task = screen.getByRole('listitem', {
        value: /read my book/i
    })
    expect(task).toBeInTheDocument()
})