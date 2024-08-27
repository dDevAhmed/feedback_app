import React from 'react'
import { useState } from "react";
import FeedbackItem from '../components/FeedbackItem'

const FeedbackList = ({ feedback, deleteFeedback }) => {
    console.log(feedback);

    // if (!feedback || feedback.length === 0) {
    //     return <div>No feedback</div>
    // }

    // const feedbackRating = ;

    return (
        // (!feedback || feedback.length === 0) ? <div>No feedback</div> :
        // <div className=''>
        //     {feedback.map((list) => (
        //         <FeedbackItem key={list.id} list={list}/>
        //     ))}
        // </div>
        (feedback || feedback.length !== 0) && (
            <div className=''>
                {feedback.map((list) => (
                    <FeedbackItem key={list.id} list={list} deleteFeedback={deleteFeedback}/>
                ))}
            </div>
        )
    )
}

export default FeedbackList
