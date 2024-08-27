import React from 'react'

const Card = ({ children, reverse }) => {

    return (
        <div className={`card ${reverse && 'reverse'}`}>
            {/* <div className='num-display'>{list.rating}</div>
            <div className='text-display'>{list.text}</div> */}
            {children}
        </div>
    )
}

export default Card
