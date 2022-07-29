import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

const POS = ['left', 'middle', 'right'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  buttonPos
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  const checkButtonPos = POS.includes(buttonPos) ? buttonPos : null;
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}  ${checkButtonPos}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};