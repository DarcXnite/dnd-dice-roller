import { useState } from "react"
import D4 from "./components/d4"
import D6 from "./components/d6"
import D8 from "./components/d8"
import D10 from "./components/d10"
import D12 from "./components/d12"
import D20 from "./components/d20"
import D100 from "./components/d100"

function App() {
	const [d4Count, setD4Count] = useState(0)
	const [d6Count, setD6Count] = useState(0)
	const [d8Count, setD8Count] = useState(0)
	const [d10Count, setD10Count] = useState(0)
	const [d12Count, setD12Count] = useState(0)
	const [d20Count, setD20Count] = useState(0)
	const [d100Count, setD100Count] = useState(0)
	const [total, setTotal] = useState(0)
	const [eachRoll, setEachRoll] = useState([])

	const rng = (sides) => {
		let num = Math.floor(Math.random() * sides) + 1
		return num
	}

	const rollDice = (dieCount, sides) => {
		console.log(`rolling ${dieCount} d${sides}`)
		setEachRoll([])
		let result = 0
		for (let i = 1; i <= dieCount; i++) {
			eachRoll.push(rng(sides))
		}
		for (let j = 0; j < eachRoll.length; j++) {
			result += eachRoll[j]
		}
		setTotal(result)
		console.log(eachRoll)
		setEachRoll(eachRoll.toString())
	}

	const arrResult = () => {
		return `[${eachRoll.toString()}]`
	}

	return (
		<div>
			<header>D&D Dice Roller</header>
			<h2>
				{`[${eachRoll}]`} = {total}
			</h2>
			<D4 d4Count={d4Count} setD4Count={setD4Count} rollDice={rollDice} />
			<D6 d6Count={d6Count} setD6Count={setD6Count} rollDice={rollDice} />
			<D8 d8Count={d8Count} setD8Count={setD8Count} rollDice={rollDice} />
			<D10 d10Count={d10Count} setD10Count={setD10Count} rollDice={rollDice} />
			<D12 d12Count={d12Count} setD12Count={setD12Count} rollDice={rollDice} />
			<D20 d20Count={d20Count} setD20Count={setD20Count} rollDice={rollDice} />
			<D100
				d100Count={d100Count}
				setD100Count={setD100Count}
				rollDice={rollDice}
			/>
		</div>
	)
}

export default App
