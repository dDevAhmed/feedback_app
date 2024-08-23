import React from 'react'
import { useState } from "react";

const FeedbackItem = ({ list }) => {

    return (
        <div className='card'>
            <div className='num-display'>{list.rating}</div>
            <div className='text-display'>{list.text}</div>
        </div>
    )
}

export default FeedbackItem
