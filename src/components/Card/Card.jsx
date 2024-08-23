import React from 'react'
import Button from '../Button'

const Card = () => {

    const buttonStyles = {
        borderRadius: '50%',
        padding: '.625rem',
        cursor: 'pointer'
    }

    const countButton = () => {
        let val = []
        for (let index = 1; index <= 10; index++) {
            val.push(<Button key={index} text={index} styles={buttonStyles} />)
        }
        return val
    }
    return (
        <div style={{ width: '725px', height: '475', background: '#fff', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', gap: '5px', padding: '20px' }}>
            {/* width 725px height 475 color: white */}
            {/* vertical buttons border-radius - 50% border: 1px hover: cursor-pointer */}
            {countButton()}
        </div>
    )
}

export default Card
