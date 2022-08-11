import { useState } from 'react'
import D4 from './components/d4'

function App() {
  const [d4Count, setD4Count] = useState(3)

  const rng = sides => {
    return Math.floor(Math.random() * sides) + 1
  }

  const d4 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(4))
    }
  }

  const d6 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(6))
    }
  }

  const d10 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(10))
    }
  }

  const d12 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(12))
    }
  }

  const d20 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(20))
    }
  }

  const d100 = () => {
    for (let i = 1; i <= d4Count; i++) {
      console.log(rng(100))
    }
  }

  const rollDice = () => {
    console.log('rolling dice')
    d4()
  }

  return (
    <div>
      <header>Hello World</header>
      <button onClick={rollDice}>Roll!</button>
      <D4 d4Count={d4Count} />
    </div>
  )
}

export default App
