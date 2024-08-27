import React from 'react'

const Button = ({children, type, isDisabled, version}) => {

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}

Button.defaultProps = {
    // version: 'secondary',
    isDisabled: false,
    type: 'button',
  }

export default Button
