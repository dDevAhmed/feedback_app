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
import { FeedbackProvider } from './components/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [lightMoodState, setlightMoodState] = useState(true);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newFeed = feedback.filter(item => item.id !== id);
      setFeedback(newFeed);
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = `leadway-${uuidv4()}`;    
    setFeedback([newFeedback, ...feedback]);
  }

  const handleAdd = () => {

  }

  const filteredFeedback = () => {

  }

  return (
    <FeedbackProvider>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStat />
        <FeedbackList deleteFeedback={deleteFeedback} />
        <a href=''><p></p>About Page</a>
      </div>
    </FeedbackProvider>
  );
}

export default App;
