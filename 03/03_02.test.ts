import {CityType} from "../02/02";
import {addMoneyBudget, createMessage, repairHouse, toFireStaff, toHospitalStaff} from "./03";
import {create} from "domain";


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

/*
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

test('budget should be changed for HOSPITAL', ()=>{
    addMoneyBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('budget should be changed for FIRE-STATION', ()=>{
    addMoneyBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House sholud be repared', ()=>{
    repairHouse(city.houses[0])
    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[0].repaired).toBeTruthy()
    //toBeTruthy() равны toBe(true)
})

test('staff must be changed', ()=>{
    toHospitalStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCoin).toBe(180)
})

test('staff must be changed', ()=>{
    toFireStaff(city.governmentBuildings[1], 20)

    expect(city.governmentBuildings[1].staffCoin).toBe(1020)
})

test('Greating message should be correct for city', ()=>{
    expect(createMessage(city)).toBe('Hello New York Citizens! I want you be happy. All 10000000 man')
})