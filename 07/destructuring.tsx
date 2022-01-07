import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string, name?: string }>
    address: {
        street: {
            title: string
        }
    }

}

export type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimaState(m: string){
    return[m, function (){}]
} //около useState


export const ManComponent = ({title, man,...props}: PropsType) => {

    const [message, setMessage] = useState<string>('Hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    )
}