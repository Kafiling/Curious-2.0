import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large','btn--moblie', 'btn--wide']
const COLOR = ['primary', 'blue','red', 'green']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor, 
}) => {
    //check Style overvise pick the first one
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES(0) 
    const checkButtonSize = SIZES.includes(buttonStyle) ? buttonSize : SIZES(0) 
    const checkButtonColor = COLOR.includes(buttonStyle) ? buttonColor : COLOR(0) 
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick} type={type} >{children}</button>
    )
}