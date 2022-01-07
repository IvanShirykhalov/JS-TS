const ages = [18, 12, 14, 64, 35, 63, 82, 14, 100, 94];
const predicate = (age: number) => {
    return age > 90;
}
const oldAges = [100]
export type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 100},
    {title: 'js', price: 200},
    {title: 'React', price: 150},
]

// < 160
const cheapPredicate = (courses: CoursesType) => {
    return courses.price < 160;
}

const cheapCourses = [
    {title: 'css', price: 100},
    {title: 'React', price: 150},
];


