import React from 'react'
import { useContext } from 'react';
import FeedbackContext from './FeedbackContext';

const FeedbackStat = () => {
    const { feedback, averageRating } = useContext(FeedbackContext);

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} feedback</h4>
            <h4>Average rating: {feedback.length === 0 ? 0 : averageRating}</h4>
        </div>
    )
}

export default FeedbackStat
