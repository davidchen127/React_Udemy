import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackState from "./components/FeedbackState"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback=(id)=>{
        if(window.confirm('are you sure ddddto delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))}
    }
    
 return (
     <>
        <Header  text={'Feedback UI'}></Header>
        <div className='container'>
            <FeedbackState feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    </>
  )
}

export default App
