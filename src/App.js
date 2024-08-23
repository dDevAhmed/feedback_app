import './App.css';
import { useState } from "react";
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import SharedCard from './components/shared/Card'
// import NavBar from './components/NavBar/NavBar';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header title={'Feedback App'} />
      <div className='container'>
        {/* <Card /> */}
        <FeedbackList  feedback={feedback}/>
        <SharedCard>
          Comming from app.js
        </SharedCard>
      </div>
      {/* <NavBar/> */}
    </>
  );
}

export default App;
