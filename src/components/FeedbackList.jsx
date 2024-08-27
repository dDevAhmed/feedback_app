import React from 'react'
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackItem from '../components/FeedbackItem';

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
        <AnimatePresence>
            (feedback || feedback.length !== 0) && (
            <div className=''>
                {feedback.map((list) => (
                    <motion.div key={list.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1}}>
                        <FeedbackItem key={list.id} list={list} deleteFeedback={deleteFeedback} />
                    </motion.div>
                ))}
            </div>
            )
        </AnimatePresence>

    )
}

export default FeedbackList
