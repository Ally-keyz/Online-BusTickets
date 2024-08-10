import { useState } from 'react'
import './App.css'
import Landing from '../app/Landing/Landing'
import LayOut from '../LayOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <LayOut />
    </div>
    </>
  )
}

export default App
