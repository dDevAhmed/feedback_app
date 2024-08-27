import React from 'react'

const FeedbackStat = ({ feedback, averageRating }) => {
   
return (
    <div className='feedback-stats'>
        <h4>{feedback.length} feedback</h4>
        <h4>Average rating: {averageRating}</h4>
    </div>
)
}

export default FeedbackStat
