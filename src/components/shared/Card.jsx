import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='card'>
            {/* <div className='num-display'>{list.rating}</div>
            <div className='text-display'>{list.text}</div> */}
            {children}
        </div>
    )
}

export default Card
