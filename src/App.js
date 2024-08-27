import './App.css';
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar';
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import SharedCard from './components/shared/Card'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'
import Button from './components/shared/Button'
// import Counter from './components/Counter'
// import MyInput from './components/MyInput'
// import TaskManager from './components/TaskManager'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [lightMoodState, setlightMoodState] = useState(true);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeed = feedback.filter(item => item.id !== id);
      setFeedback(newFeed);
    }
  }

  const filteredFeedback = () => {

  }

  const averageRating = feedback.reduce((feedback, feedbackItem) => {
    return feedback + feedbackItem.rating;
  }, 0) / feedback.length

  const handleAdd = () => {

  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = `leadway-${uuidv4()}`;    
    setFeedback([newFeedback, ...feedback]);
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStat feedback={feedback} averageRating={feedback.length === 0 ? 0 : averageRating} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        {/* <Button version={'secondary'}>App.js</Button> */}
        {/* <SharedCard>
          Coming from App.js
        </SharedCard> */}
        {/* <Counter /> */}
        {/* <MyInput /> */}
        {/* <TaskManager /> */}
      </div>
    </>
  );
}

export default App;
