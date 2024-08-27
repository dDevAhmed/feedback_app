import React, { useState } from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import RatingSelect from '../components/RatingSelect'

const FeedbackForm = () => {

    const [text, setText] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
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

    return (
        <Card>
            <form action=''>
                <h2>How would you rate our service?</h2>
                <RatingSelect />
                <div className="input-group">
                    <input type="text" name="" id="" placeholder='write a message' onChange={handleChange} value={text} />
                    <Button version={'primary'} isDisabled={buttonDisabled}>Send</Button>
                </div>
                {/* <p style={color: 'red'}>(errorMessage ? errorMessage : '')</p> */}
            </form>
        </Card>
    )
}

export default FeedbackForm
