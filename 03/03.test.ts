/*
import {CityType} from "./03";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                builtAt: 2012, repaired: false, address: {
                    number: 100, street: {
                        title: 'White street'
                    }
                }
            },
            {
                builtAt: 2008, repaired: true, address: {
                    number: 100, street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                builtAt: 2020, repaired: false, address: {
                    number: 101, street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCoin: 200, address: {
                    street: {title: 'Central Str'}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCoin: 1000, address: {
                    street: {title: 'South Str'}
                }
            },
        ],
        citizenNumber: 10000000
    }
})

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].builtAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].builtAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].builtAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Happy street')

})

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCoin).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCoin).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South Str')

})*/

import {addSkill, doesStudentLiveIn, makeStudentNotActive, StudentType} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        'name': 'Ivan',
        age: 26,
        isActive: true,
        address: {
            streetTitle: 'Bolshevik avenue',
            city: {
                title: 'SPb',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
            {
                id: 4,
                title: 'React'
            },
            {
                id: 5,
                title: 'NodeJS'
            },
        ],
    }
})

test('new tech skill should be added', () => {
    expect(student.technologies.length).toBe(5)

    addSkill(student, 'Redux')

    expect(student.technologies.length).toBe(6)
    expect(student.technologies[5].title).toBe('Redux')
    expect(student.technologies[5].id).toBeDefined()//проверка на то, определен ли id

})

test('student should be made active', ()=>{
    expect(student.isActive).toBe(true)

    makeStudentNotActive(student)
    expect(student.isActive).toBe(false)
})

test('student lives in Russia?', ()=>{

    let result1 = doesStudentLiveIn(student, 'USA')
    let result2 = doesStudentLiveIn(student, 'Russia')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})