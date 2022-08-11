import React from 'react'

export default function d100({ d100Count, setD100Count, rollDice }) {
    return (
        <div><p>How many d100 do you want to roll?</p>
            <input min={0} type="number" value={d100Count} onChange={e => setD100Count(e.target.value)} />
            <button onClick={() => rollDice(d100Count, 100)}>Roll!</button>
        </div>
    )
}
