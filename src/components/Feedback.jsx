import { useState, useEffect } from 'react'
import './Feedback.css'
import { supabase } from '../utils/supabaseClient'

function Feedback() {
  const [messages, setMessages] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    fetchMessages()

    const channel = supabase
      .channel('feedback_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'feedback' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setMessages(prev => [payload.new, ...prev])
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching messages:', error)
    } else {
      setMessages(data)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newMessage = {
      ...formData,
      created_at: new Date().toISOString()
    }

    const { error } = await supabase
      .from('feedback')
      .insert([newMessage])

    if (error) {
      console.error('Error inserting message:', error)
    } else {
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <div className="feedback-container">
      <h1 className="section-title">Feedback</h1>
      <div className="feedback-content">
        <div className="feedback-form">
          <h2>Leave a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Post a Message</button>
          </form>
        </div>
        <div className="messages-display">
          <h2>Messages</h2>
          <div className="messages-list">
            {messages.length === 0 ? (
              <p className="no-messages">No messages yet. Be the first to leave one!</p>
            ) : (
              messages.map(msg => (
                <div key={msg.id} className="message-card">
                  <div className="message-header">
                    <h3>{msg.name}</h3>
                    <span className="timestamp">{msg.timestamp}</span>
                  </div>
                  <p className="message-text">{msg.message}</p>
                  <p className="message-email">{msg.email}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback