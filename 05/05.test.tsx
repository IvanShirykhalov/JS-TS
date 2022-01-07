import {createGreetingMessages, peopleType} from "./05";


let people: Array<peopleType> = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Ivan Sidorov', age: 33},
    ]
})

test('should get array of greeting messages', ()=>{
    const message = createGreetingMessages(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Andrew. Welcome to IT-Incubator.')
    expect(message[1]).toBe('Hello Alex. Welcome to IT-Incubator.')
    expect(message[2]).toBe('Hello Ivan. Welcome to IT-Incubator.')
})