import React from 'react'
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from './shared/Card'

const FeedbackItem = ({ list, deleteFeedback }) => {

    const {id, rating, text} = list;

    // const handleDelete = (Id) => {
    //     console.log(Id);
    // }

    return (
        <Card reverse={true}>
            <div className='num-display'>{rating}</div>
            <button className='close' onClick={() => deleteFeedback(id)}><FaTimes color='#ff2400'/></button>
            <div className='text-display'>{text}</div>
        </Card>
    )
}

export default FeedbackItem
