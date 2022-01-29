import {
    makeHairstyle,
    userType,
    UserWithLaptopType,
    upgradeUserLaptop,
    moveUser,
    UserWithBookType,
    moveUserToOfTheHouse, addNewBooksToUser, updateBook, whitCompaniesType, updateCompany, updateCompany2
} from "./10";

test('reference type test', () => {

    let user: userType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
    }

    const trimmedUser = makeHairstyle(user, 2)

    expect(trimmedUser.hair).toBe(10)
    expect(user.hair).toBe(20)

    expect(trimmedUser.address).toBe(user.address)
    //т.к у нас поверхностоное копирование, но в copyUser мы лишь создали ссылку на объект address
    //а hair поменял свое значение т.к это примитив.
})

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.title).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const newUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(newUser)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(user.address).toBe(newUser.address)
    expect(newUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('newUser house', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = moveUserToOfTheHouse(user, 99)

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.address).not.toBe(newUser.address)
    expect(user.books).toBe(newUser.books)
    expect(user.address.house).toBe(12)
    expect(newUser.address.house).toBe(99)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = addNewBooksToUser(user, 'nodeJS')

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.books).not.toBe(newUser.books)
    expect(user.books.length).toBe(4)
    expect(newUser.books.length).toBe(5)
    expect(newUser.books[4]).toBe('nodeJS')

})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.books).not.toBe(newUser.books)
    expect(user.books.length).toBe(4)
    expect(newUser.books[2]).toBe('ts')
})


test('upgrade epam', () => {
    let user: UserWithLaptopType & whitCompaniesType = {
        name: 'Igor',
        hair: 20,
        address: {
            title: 'Moscow',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-Incubator'},
        ]
    }

    const newUser = updateCompany(user, 1, 'Epam')

    expect(user).not.toBe(newUser)
    expect(user.laptop).toBe(newUser.laptop)
    expect(user.companies[0].title).toBe('Епам')
    expect(newUser.companies[0].title).toBe('Epam')

})

test('upgrade companies', () => {

    let companies = {
        'Igor': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-Incubator'}],
        'Oleg' : [{id: 2, title: 'IT-Incubator'}]
    }

    const copy = updateCompany2(companies, 'Igor', 1, 'ЕПАМ')

    expect(copy['Igor']).not.toBe(companies['Igor'])
    expect(copy['Oleg']).toBe(companies['Oleg'])
    expect(copy['Igor'][0].title).toBe('ЕПАМ')
})