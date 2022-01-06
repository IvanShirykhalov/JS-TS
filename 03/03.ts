/*
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
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}*/

/*type StudentCityType = {
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
export type StudentType = {
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

export const addSkill = (s: StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentNotActive = (s:StudentType)=>{
    s.isActive = false;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return  s.address.city.countryTitle === cityName
}*/


import {CityType, GovernmentBuildingsType, HousesType} from "../02/02";

export const addMoneyBudget = (building: GovernmentBuildingsType, budget: number) =>{
    building.budget += budget
}

export function repairHouse(house: HousesType){
    house.repaired = true
}

export const toHospitalStaff = (building: GovernmentBuildingsType, staff: number)=>{
    building.staffCoin -= staff
}

export const toFireStaff = (building: GovernmentBuildingsType, staff: number)=>{
    building.staffCoin += staff
}

export function createMessage(city: CityType){
    return `Hello ${city.title} Citizens! I want you be happy. All ${city.citizenNumber} man`
}