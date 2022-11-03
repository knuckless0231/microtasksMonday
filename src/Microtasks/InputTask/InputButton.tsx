import React, {ChangeEvent, useState} from 'react'


export type InputButtonPropsType = {
    plusArrayFunc: (messageAdd: string) => void
}


export const InputButton = (props: InputButtonPropsType) => {
    let [inputValue, setInputValue] = useState('')//почему первое значение не отоображаетсчя в ЛОГЕ?


    let onIInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

        const plussArrayFunc = () => {
            props.plusArrayFunc(inputValue)
            setInputValue('')
        }


    return (

        <div>
            <input value={inputValue} onChange={onIInput}/>
            <button onClick={plussArrayFunc}>+</button>//почему не видит функцию?
        </div>

    );
}