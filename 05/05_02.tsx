import {GovernmentBuildingsType, HousesType} from "../02/02";

export const getStreetsTitleOfGovermentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(st => st.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HousesType>) =>{
    return houses.map(st => st.address.street.title)
}

export const greetingMessages = (houses: Array<HousesType>) =>{
    return houses.map(m => `Hello guys from ${m.address.street.title}`)
}

/*
const name = ['Alex', 'Sam', 'Nick', 'Bob', 'Fred', 'John', 'Andy']
const liEl = name.map(n => <li>{n}</li>)
данным обрахом мы отобразим все эленты массива в виде li-шек
*/

/*const name = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Flex'},
    {id: 3, name: 'Lex'},
    {id: 4, name: 'Jex'},
    {id: 5, name: 'Pex'},
]
const liEl = name.map((u) => <li key={u.id}>{u.name}</li>)*/
