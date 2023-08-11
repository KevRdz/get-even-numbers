import { useState } from 'react'
import './App.css'

function App() {
  const [startData, setStartData] = useState(0)
  const [EndData, setEndData] = useState(0)

  const handleStartChange = (evt) => {
    setStartData(evt.target.value)
  }

  const handleEndChange = (evt) => {
    setEndData(evt.target.value)
  }

  return (
    <>
      <h1>Enter start and end digit</h1>
      <div className='start-digit'>
        <label htmlFor="start">Start Number</label>
        <input type="number" id='start' onChange={handleStartChange}/>
      </div>
      <div className='end-digit'>
        <label htmlFor="end">End Number</label>
        <input type="number" id='end' onChange={handleEndChange}/>
      </div>
      <div>
        <button>Enter</button>
      </div>
      <h2>{formData}</h2>
    </>
  )
}

export default App
