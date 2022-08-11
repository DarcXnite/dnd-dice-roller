import React from 'react'

export default function d10({ d10Count, setD10Count, rollDice }) {
    return (
        <div><p>How many d10 do you want to roll?</p>
            <input min={0} type="number" value={d10Count} onChange={e => setD10Count(e.target.value)} />
            <button onClick={() => rollDice(d10Count, 10)}>Roll!</button>
        </div>
    )
}
