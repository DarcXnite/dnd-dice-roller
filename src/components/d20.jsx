import React from 'react'

export default function d20({ d20Count, setD20Count, rollDice }) {
    return (
        <div><p>How many d20 do you want to roll?</p>
            <input min={0} type="number" value={d20Count} onChange={e => setD20Count(e.target.value)} />
            <button onClick={() => rollDice(d20Count, 20)}>Roll!</button>
        </div>
    )
}
