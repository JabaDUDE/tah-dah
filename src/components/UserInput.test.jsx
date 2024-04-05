import { render, screen } from '@testing-library/react'
import { fixString } from "../App";
import { UserInput } from './UserInput'

it('should return all lowercase string with first character capitalized', () =>{

    const tests = [{'input': 'hello world', 'expected': 'Hello world'}, {'input': 'ONE OF THESE DAYS', 'expected': 'One of these days'}, {'input': 'i SeE dEaD pEoPlE', 'expected': 'I see dead people'}, {'input': '   hello   ', 'expected': 'Hello'}];

    for(const test of tests){
        const expectedValue = test.expected
        const inputValue = test.input
        const actualValue = fixString(inputValue)
        expect(actualValue).toEqual(expectedValue)
        expect(actualValue.length).toEqual(expectedValue.length)
        expect(actualValue[0]).toEqual(actualValue[0].toUpperCase())
    }
})

it('should render component correctly', () => {
    render(<UserInput />)
    screen.debug()
})
