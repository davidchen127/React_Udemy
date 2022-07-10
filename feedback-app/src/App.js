import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackState from "./components/FeedbackState"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
import AboutPage from "./pages/AboutPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback=(id)=>{
        if(window.confirm('are you sure ddddto delete?')){
            setFeedback(feedback.filter((item)=>item.id!==id))}
    }
    
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])
    }
 return (
     <Router>
        <Header  text={'Feedback UI'}></Header>
        <div className='container'>
            <Routes>
                <Route exact path="/" element={
                    <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackState feedback={feedback}/>
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>
                }>
                </Route>

                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
