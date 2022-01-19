export const usersObj = {
    '0': 'Ivan',
    '1': 'Bogdan',
    '2': 'Petr',
    '3': 'Gleb',
}

type UsersType = {
    [key : string] : {id: number, name: string}
}

 const users: UsersType = {
    '101': {id: 101, name: 'Ivan'},
    '2124': {id: 2124, name: 'Bogdan'},
    '43621': {id: 43621, name: 'Petr'},
    '2': {id: 2, name: 'Gleb'},
}

let user = {id: 12124, name: 'Vasiliy'}
//users[user.id] = users // добавляем user = {id: 12124, name: 'Vasiliy'} в массив users
// если юзер с id 12124 уже был - он перезатрется
delete users[user.id] // таким образом мы мгновенно можем удалить юзера
// в данном случае {id: 12124, name: 'Vasiliy'}
//users[user.id].name = 'Oleg' - таким образом мы сразу меняем  'Vasiliy' на 'Oleg'

//users[2] - мгновенно найдет объект {id: 2, name: 'Gleb'}

export const userArray = [
    {id: 101, name: 'Ivan'},
    {id: 2124, name: 'Bogdan'},
    {id: 43621, name: 'Petr'},
    {id: 2, name: 'Gleb'},
]

//сдесь мы не сможем сделать users[2], тут необходим метод find
//userArray.find(u => u.id === 2) и метод find будет перебирать весь массив
// в данном примереобъектов всего 4, но их может быть миллион (и даже больше)
// чтобы доавить user = {id: 12124, name: 'Vasiliy'} в обычно массиве необходимо
//var usersCopy = [...userArray.filter(), user] что приведет к пробеганию по всему массиву
//если у нас был пользователь с id 12124 то создастся дубликат
// let usersArray = usersArray.filter(u => u.id !== users.id) и опять, чтобы удалить этого юзера
// необходимо пробегать по всему массиву