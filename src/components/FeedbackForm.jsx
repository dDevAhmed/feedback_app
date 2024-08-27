import React, { useState } from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import RatingSelect from '../components/RatingSelect'

const FeedbackForm = ({ handleAdd }) => {

    const [text, setText] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleChange = (e) => {
        setText(e.target.value);
        // fixme - if 0
        if (text.length === '') {
            setButtonDisabled(true);
            setErrorMessage('Feedback should not be empty');
        }
        else if (text.length !== '' && text.trim().length < 10) {
            setErrorMessage('Feedback should be at least 10 characters long');
            setButtonDisabled(true);
        }
        else if (text.length !== '' && text.trim().length >= 10) {
            setErrorMessage(null);
            setButtonDisabled(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating,
        }
        handleAdd(newFeedback);
        setText(''); 
        // fixme
        setRating(10);
    }

    return (
        <Card>
            <form action='' onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={(buttonSelected) => { setRating(buttonSelected) }} />
                <div className="input-group">
                    <input type="text" name="" id="" placeholder='write a message' onChange={handleChange} value={text} />
                    <Button type={'submit'} version={'primary'} isDisabled={buttonDisabled}>Send</Button>
                </div>
                <p style={{ color: 'red' }}>{errorMessage ? errorMessage : ''}</p>
            </form>
        </Card>
    )
}

export default FeedbackForm
