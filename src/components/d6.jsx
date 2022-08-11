import React from 'react'

export default function d6({ d6Count, setD6Count, rollDice }) {
    return (
        <div><p>How many d6 do you want to roll?</p>
            <input min={0} type="number" value={d6Count} onChange={e => setD6Count(e.target.value)} />
            <button onClick={() => rollDice(d6Count, 6)}>Roll!</button>
        </div>
    )
}
