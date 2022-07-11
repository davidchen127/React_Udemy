import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetchFeedback()
  }, [])

  // fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=rating&_order=desc`)
    const data = await response.json()
    console.log(data)

    setFeedback(data)
    setIsLoading(false)
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = async (id) => {
    if (window.confirm('are you sure ddddto delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // add new feedback item
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback?_sort=rating&_order=desc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    // newFeedback.id = uuidv4() // id will be created automatically from server
    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  //update feedback item
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })

    const data = await response.json()
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
