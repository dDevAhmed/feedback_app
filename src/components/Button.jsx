import React from 'react'
import {useState} from 'react'

const Button = ({ text, btn }) => {

    const [buttonState, setButtonState] = useState(false);

    return (
        <button style={btn}>{text}</button>
    )
}

export default Button;
