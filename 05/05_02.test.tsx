import {CityType} from "../02/02";
import {getStreetsTitleOfGovermentsBuildings, getStreetsTitleOfHouses, greetingMessages} from "./05_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                builtAt: 2012, repaired: false, address: {
                    number: 100, street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                builtAt: 2008, repaired: true, address: {
                    number: 100, street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
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

test('list title of goverments buildings', ()=>{
    let streetsName = getStreetsTitleOfGovermentsBuildings(city.governmentBuildings)

    expect(streetsName.length).toBe(2)
    expect(streetsName[0]).toBe('Central Str')
    expect(streetsName[1]).toBe('South Str')
})

test('list on streets titles', ()=>{
    let streets = getStreetsTitleOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White street')
    expect(streets[0].toLowerCase()).toBe('white street')
    expect(streets[1].toLowerCase()).toBe('happy street')
    expect(streets[2].toLowerCase()).toBe('happy street')
})

test('create greeting messages for streets', ()=>{
    let messages = greetingMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street')
    expect(messages[1]).toBe('Hello guys from Happy street')
    expect(messages[2]).toBe('Hello guys from Happy street')
    expect(messages[2].toLowerCase()).toBe('hello guys from happy street')
})