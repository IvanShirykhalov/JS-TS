/*
let user = {
    'name':'Igor',
    'age': 25,
    'address': {
        'city' :{
            'title' : 'Karaganda'
        }
    }
}

//user['address']["city"]['title'] - 'Karaganda'
//user.address.city.title - 'Karaganda'

/!*
let city = {}
city.title = 'Karaganda'
теперь в объекте city есть 'title' : 'Karaganda'
 city = {'title' : 'Karaganda'}

 city.citizensCount = 1000

 теперь в объекте city есть 'citizensCount' : 1000
 city = {'title' : 'Karaganda', 'citizensCount' : 1000}
*!/

let users = ['Igor', 'Oleg', 'Vasya', 'Petr']
users[0] - 'Irog'
users[1] - 'Oleg'

users['привет как дела'] = 'нормас'

//users.привет как дела - ничего не выйдет т.к рус.яз + есть пробелы
//users['привет как дела'] - 'нормас' - все ок т.к взяли в [] + ''

let users = {
    '0' : 'dima',
    '1' : 'masha',
    '2' : 'vika',
    '3' :'sasha',
    '4' : 'katya',
    '5' : 'anya',
}
Object.keys(users) // вернет ['0', '1', '2', '3', '4', '5']
Object.values(users) // венет ['dima','masha', 'vika', 'sasha', 'katya',  'anya']

// т.к Object.keys() и Object.values() - массивы, их можно мапить и фильтровать (да и любое свойство массива)
*/

