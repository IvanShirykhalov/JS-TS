export type userType = {
    name: string
    hair: number
    address: { title: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = userType & {
    laptop: LaptopType
}

export type UserWithBookType = userType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string }
export type whitCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: Usertype, power: number) {
    const copyUser = {
        ...u,
        hair: u.hair / power
    }

    return copyUser
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }
    /*    copyUser.address = {...copyUser.address, title: city}
        return copyUser*/
}

export function moveUserToOfTheHouse(u: UserWithLaptopType & UserWithBookType
    , house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    /*    copyUser.address = {...copyUser.address, title: city}
        return copyUser*/
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithBookType & UserWithBookType, b: string) {
    return {
        ...u,
        books: [...u.books, b]

    }
}

export function updateBook(u: UserWithBookType & UserWithLaptopType, js: string, ts: string) {
    /*    return {
            ...u,
            books: u.books.map(b => b === 'js' ? 'ts' : b)
        }*/
    return {
        ...u,
        books: u.books.map(b => b === js ? ts : b)
    }

}

export const updateCompany = (u: UserWithLaptopType & whitCompaniesType, id: number, title: string) => ({
    ...u,
    companies: u.companies.map(i => i.id === id ? {...i, title: title} : i)
})

export const updateCompany2 = (companies: { [key: string]: Array<CompanyType> },
                               userName: string,
                               companyId: number,
                               newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle} : c)

    return companyCopy
}