import { useState } from 'react'
import './App.css'
import TodoTotal from './components/TodoTotal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <TodoTotal className="tFrame"/>
    </div>
  )
}

export default App

