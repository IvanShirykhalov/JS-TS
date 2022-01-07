/*
type StudentCityType = {
    title: string
    countryTitle: string
}
type AddressArray = {
    streetTitle: string
    city: StudentCityType
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressArray
    technologies: Array<TechnologiesType>
}


const student: StudentType = {
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
        {id: 1,
        title: 'HTML'
        },
        {id: 2,
        title: 'CSS'
        },
        {id: 3,
        title: 'JS'
        },
        {id: 4,
        title: 'React'
        },
        {id: 5,
        title: 'NodeJS'
        },
    ],
}

console.log(student.technologies[3].title)*/

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCoin: number
    address: AddressType
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HousesType = {
    id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}