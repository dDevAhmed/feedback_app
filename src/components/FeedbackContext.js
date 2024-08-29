import { createContext, useState } from "react";
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const averageRating = feedback.reduce((feedback, feedbackItem) => {
        return feedback + feedbackItem.rating;
    }, 0) / feedback.length

    return <FeedbackContext.Provider value={{
        feedback,
        averageRating
    }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext;