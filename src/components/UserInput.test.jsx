import { render, screen } from '@testing-library/react'
import { fixString } from "../App";
import { UserInput } from './UserInput'

//test with name of input as 'title'
it('should return all lowercase string with first character capitalized', () =>{

    const tests = [{'input': 'hello world', 'expected': 'Hello world'}, {'input': 'ONE OF THESE DAYS', 'expected': 'One of these days'}, {'input': 'i SeE dEaD pEoPlE', 'expected': 'I see dead people'}, {'input': '   hello   ', 'expected': 'Hello'},];

    for(const test of tests){
        const expectedValue = test.expected
        const inputValue = test.input
        const actualValue = fixString('title',inputValue)
        expect(actualValue).toEqual(expectedValue)
        expect(actualValue.length).toEqual(expectedValue.length)
        expect(actualValue[0]).toEqual(actualValue[0].toUpperCase())
    }
})

//test with name of input as 'description'
it('should format description so its lowercase with first letter of each sentence is capitalized', () => {
    const tests = [{'input': ' what? im done ', 'expected': 'What? Im done'}, {'input': 'wHatS wronG?  ', 'expected': 'Whats wrong?'}]

    for(const test of tests){
        const expectedValue = test.expected
        const inputValue = test.input
        const actualValue = fixString('description', inputValue)
        expect(actualValue).toEqual(expectedValue)
    }
})