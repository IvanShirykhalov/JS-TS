import {ManType} from "./destructuring";


let props : ManType
beforeEach(()=> {
    props = {
        name: 'Gosha',
        age: 23,
        lessons: [{title: '1', name: 'js'}, {title: '2'}, {title: '3', name: 'css'}],
        address: {
            street: {
                title: 'st. Pushkina'
            }
        }
    }
})

test('', ()=>{

    //const age = man.age
    //const lessons = man.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(23)
    expect(lessons.length).toBe(3)
    expect(lessons[0].title).toBe('1')
    expect(title).toBe('st. Pushkina')
    expect(lessons[1].title).toBe('2')
})

test('', ()=>{
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const l3 = props.lessons[2]

    //const [ls1] = props.lessons //если нужен первый lessons 1
    const [ls1, ...restLessons] = props.lessons //так мы выделяем ls1, а все остальное кладем в resLessons
    //const [ , ls2] = props.lessons // если нужен lessons 2
    const [ , ls2, ...restLessons2] = props.lessons // если нужен lessons 2, а все ls послед ls2 кладем в restLessons2
    const [ , , ls3] = props.lessons // если нужен lessons 3


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(l3.title).toBe('3')

    expect(restLessons.length).toBe(2)
    expect(restLessons[0].title).toBe('2')

    expect(restLessons2.length).toBe(1)
    expect(restLessons2[0].title).toBe('3')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(ls3.title).toBe('3')

    expect(l1).toStrictEqual({title: '1', name: 'js'})
    expect(l3).toStrictEqual({title: '3', name: 'css'})
    expect(l2).toStrictEqual({title: '2'})

    expect(restLessons2).toStrictEqual([{title: '3', name: 'css'}])
})