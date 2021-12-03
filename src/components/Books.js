import './Books.css'
import React, { useState } from "react";


export default function Books({title, body}) {

    const [style, setStyle] = useState('card')

    const changeStyle = () => {
        if(style === 'card'){
            setStyle('red')
        }
        else {
            setStyle('card')
        }
    }


    return (
        <div>
        <div onClick = {changeStyle} className = 'books'>
            <div className={style}>
        <h2>{title}</h2>
        <p>{body}</p>
        </div>
        </div>
        </div>
    )
}
