import React, {ChangeEvent, MouseEvent} from "react";

/*
const callback = () => {
    alert('Hi')
}
setTimeout(callback, 1000); // setTimeout вызовет функцию callback через 1 секунду
*/


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) =>{
        alert(e.currentTarget.name)
        //alert('user deleted')
    }
    const saveUser = () =>{
        alert('save user')
    }
    const onNameChanged = () =>{
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed: ${e.currentTarget.value}`)
    }
    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}
            >Dima</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name={'delete'} onClick={deleteUser}>x</button>
            <button name={'save'} onClick={deleteUser}>x</button>
        </div>
    )
}