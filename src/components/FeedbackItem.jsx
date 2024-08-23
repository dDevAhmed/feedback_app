import React from 'react'
import { useState } from "react";
import Card from './shared/Card'

const FeedbackItem = ({ list }) => {

    return (
        <Card>
            <div className='num-display'>{list.rating}</div>
            <div className='text-display'>{list.text}</div>
        </Card>
    )
}

export default FeedbackItem
