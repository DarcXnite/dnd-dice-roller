import React from 'react'

export default function d8({ d8Count, setD8Count, rollDice }) {
    return (
        <div><p>How many d8 do you want to roll?</p>
            <input min={0} type="number" value={d8Count} onChange={e => setD8Count(e.target.value)} />
            <button onClick={() => rollDice(d8Count, 8)}>Roll!</button>
        </div>
    )
}
