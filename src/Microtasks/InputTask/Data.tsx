import React, {useState} from 'react'
import {InputButton} from "./InputButton";


export type MessageType = {
    message: string
}

export const Data = () => {

    const [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}])


    const plusArrayFunc = (messageAdd:string) =>{

        let newMessage = {message : messageAdd}
        setMessage([...message,newMessage])

    }

    return (

        <div>
            {message.map((message,index) => {
                return (
                    <div>
                    <ul>
                  <li value={index}>{message.message}</li>
                    </ul>
                    </div>
                );
            }
            )}
                <InputButton plusArrayFunc={plusArrayFunc}/>
        </div>
    );

}