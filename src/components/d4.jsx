import { useState } from 'react'

export default function d4({ d4Count, setD4Count, rollDice }) {


  return <div>
    <p>How many d4 do you want to roll?</p>
    <input min={0} type="number" value={d4Count} onChange={e => setD4Count(e.target.value)} />
    <button onClick={() => rollDice(d4Count, 4)}> Roll!</button>

  </div >
}
