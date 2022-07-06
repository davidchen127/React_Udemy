import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"

function App() {
    const [feedback, setfeedback] = useState(FeedbackData);

    
 return (
     <>
        <Header  text={'Feedback UI'}></Header>
        <div className='container'>
        <FeedbackList feedback={feedback}/>
        </div>
    </>
  )
}

export default App
