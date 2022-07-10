import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackState from "./components/FeedbackState"
import FeedbackForm from "./components/FeedbackForm"

import AboutPage from "./pages/AboutPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
       
 return (
    <FeedbackProvider>
        <Router>
            <Header  text={'Feedback UI'}></Header>
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <FeedbackForm />
                        <FeedbackState />
                        <FeedbackList />
                        </>
                    }>
                    </Route>

                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>

                <AboutIconLink></AboutIconLink>
            </div>
        </Router>
    </FeedbackProvider>
  )
}

export default App
