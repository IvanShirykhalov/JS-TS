import {CityType, GovernmentBuildingsType} from "../02/02";

export function demolishHousesOnTheStreet(city: CityType, st: string){
    city.houses = city.houses.filter(h => h.address.street.title !== st)
}
 export function getBuildingsStaffCountGreaterThen(building: Array<GovernmentBuildingsType>, number: number) {
    return building.filter(b => b.staffCoin > number)
 }