import React from 'react'

export default function d12({ d12Count, setD12Count, rollDice }) {
    return (
        <div><p>How many d12 do you want to roll?</p>
            <input min={0} type="number" value={d12Count} onChange={e => setD12Count(e.target.value)} />
            <button onClick={() => rollDice(d12Count, 12)}>Roll!</button>
        </div>
    )
}
