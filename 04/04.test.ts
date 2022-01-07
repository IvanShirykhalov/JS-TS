import {CoursesType} from "./04";

test('should select people over 90', () => {
    const ages = [18, 12, 14, 64, 35, 63, 82, 14, 100, 94];

    const oldAges = ages.filter(a => a > 90)

    expect(oldAges.length).toBe(2)
})

test('should take cheap courses', ()=>{
    const courses = [
        {title: 'css', price: 100},
        {title: 'js', price: 200},
        {title: 'React', price: 150},
    ]


    const cheapCourses = courses.filter((c: CoursesType) => c.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('React')
    expect(cheapCourses[0].price).toBe(100)
    expect(cheapCourses[1].price).toBe(150)

})

test('get only completed tasks', ()=>{
    const tasks =[
        {id:1, title: 'Bread', isDone: true},
        {id:2, title: 'Sugar', isDone: false},
        {id:3, title: 'Milk', isDone: true},
        {id:4, title: 'Salt', isDone: false},
    ]

    const completedTasks = tasks.filter(t => t.isDone)

    const unCompletedRTasks = tasks.filter(t => !t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('Bread')
    expect(completedTasks[1].title).toBe('Milk')
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)

    expect(unCompletedRTasks[0].title).toBe('Sugar')
    expect(unCompletedRTasks[1].title).toBe('Salt')
    expect(unCompletedRTasks[0].id).toBe(2)
    expect(unCompletedRTasks[1].id).toBe(4)
})

