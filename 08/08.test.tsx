type UsersType = {
    [key : string] : {id: number, name: string}
}

let users: UsersType

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Ivan'},
        '2124': {id: 2124, name: 'Bogdan'},
        '43621': {id: 43621, name: 'Petr'},
        '2': {id: 2, name: 'Gleb'},
    }
})

test ('should update corresponding user', ()=>{
    users[101].name = 'Vanya'

    expect(users[101].name).toBe('Vanya')
    expect(users[2].id).toBe(2)
    expect(users[2].name).toBe('Gleb')
    expect(users[2]).toEqual({id: 2, name: 'Gleb'})
})

test('should delete corresponding user', ()=>{
  delete users[2124]

  expect(users[2124]).toBeUndefined()
})