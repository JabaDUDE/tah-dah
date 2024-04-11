import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TaskList } from './TaskList'

const tasks = [
    {
        id: Date.now(),
        title: 'read my book',
        description: 'read rest of Dune'
    }
]
it('should render correctly', () => {

    render(<TaskList doneDids={tasks}/>)
    screen.debug()
})
it('should render a list of tasks', () => {

    render(<TaskList doneDids={tasks} />)
    const task = screen.getByRole('listitem', {
        value: /read my book/i
    })
    expect(task).toBeInTheDocument()
})