export type peopleType = {
    name: string
    age: number
}


const people: Array<peopleType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Ivan Sidorov', age: 33},
]

/*const transformator = (man: peopleType) => {
    return {
        stack: ['html', 'css', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}
const devs = people.map(transformator)*/


const devs2 = people.map(m => ({
    stack: ['html', 'css', 'js', 'react'],
    firstName: m.name.split(' ')[0],
    lastName: m.name.split(' ')[1],
}))


let message = people.map(m => `Hello ${m.name.split(' ')[0]}. Welcome to IT-Incubator. `)

export const createGreetingMessages = (people: Array<peopleType>) => {
    return people.map(m => `Hello ${m.name.split(' ')[0]}. Welcome to IT-Incubator.`)
}