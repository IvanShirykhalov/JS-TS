function increaseAge(u: Usertype) {
    u.hair++
}

type Usertype = {
    name: string
    hair: number
    address: {title: string}
}

test('reference type test', () => {
    let user: Usertype = {
        name: 'Igor',
        hair: 45,
        address:{
            title: 'Moscow'
        }
    }
    increaseAge(user)

    expect(user.hair).toBe(46)

    let superIgor = user
    superIgor.name = 'superIgor'
    expect(superIgor.name).toBe('superIgor')
    expect(user.name).toBe('superIgor')
    //на этом примере показано, что user и superIgor - это ссылки на один и тот же
    // массив, в следвствии чего, меняя имя в superIgor оно изменится и у user
    // говорить что оно изменится и там и там некорректно, т.к user и superIgor - это
    // ссылки на один и тот же объект

})

test('array test', ()=>{
    let users = [
        {name: 'kate', age: 18},
        {name: 'elena', age: 28},
    ]

    let superUsers = users
    superUsers.push({name: 'Bandit', age: 10})//таким образом мы добавили бандита в массива
    // у которого есть две ссылки на него users и superUsers

    expect(users[2].name).toBe('Bandit')
})

test('value type test', ()=>{
    let userCount = 100
    let adminsCount = userCount
    adminsCount = adminsCount * 2
    expect(userCount).toBe(100)
    expect(adminsCount).toBe(200)

    //т.к 100 это примитив, когда мы пишет let adminsCount = userCount, это подразумевает то,
    // что adminsCount = 100, но он не равен userCount
    // и если мы умножим adminsCount на 2 мы получим 200,
    // а userCount так и останется 100
})

test('address test', () => {
    let user: Usertype = {
        name: 'Igor',
        hair: 45,
        address:{
            title: 'Moscow'
        }
    }

    let user2: Usertype = {
        name: 'Valera',
        hair: 54,
        address: user.address
    }
    // на данный момент у нас 3 объекта user, user2 и address
    // если у user2 мы изменим адрес, он поменяется и у user т.к в user2 сидит ссылка
    // на объект address
    user2.address.title = 'Kazan'
    expect(user.address.title).toBe('Kazan')

    const users =[user, user2, {name:'Petr', age: 23, address:user.address.title}]

    const superIgor = [user]
    superIgor[0].name = 'superIgor'
    expect(users[0].name).toBe('superIgor')
    expect(superIgor[0].name).toBe('superIgor')
    expect(user.name).toBe('superIgor')
    // опять-таки все из-за того, что все это ссылки на объект

})

