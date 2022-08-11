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
	const [showDie, setShowDie] = useState({
		d4: false,
		d6: false,
		d8: false,
		d10: false,
		d12: false,
		d20: false,
		d100: false,
	})
	const [total, setTotal] = useState(0)
	const [eachRoll, setEachRoll] = useState("")

	const rng = (sides) => {
		let num = Math.floor(Math.random() * sides) + 1
		return num
	}

	const rollDice = (dieCount, sides) => {
		console.log(`rolling ${dieCount} d${sides}`)
		setEachRoll("")
		let result = 0
		let resultArr = []
		for (let i = 1; i <= dieCount; i++) {
			resultArr.push(rng(sides))
		}
		for (let j = 0; j < resultArr.length; j++) {
			result += resultArr[j]
		}
		setTotal(result)
		console.log(resultArr)
		setEachRoll(resultArr.toString())
	}

	const showWhichOne = (key) => {
		for (let die in showDie) {
			console.log(typeof die)
			if (key === die) {
				showDie[die] = true
			} else {
				showDie[die] = false
			}
		}
		console.log(showDie)
	}

	return (
		<div>
			<header>D&D Dice Roller</header>
			<h2>
				{eachRoll ? `[${eachRoll}] = ` : ""}
				{total}
			</h2>
			<span>
				<button name="d4" onClick={(e) => showWhichOne(e.target.name)}>
					d4
				</button>
				<button name="d6" onClick={(e) => showWhichOne(e.target.name)}>
					d6
				</button>
				<button name="d8" onClick={(e) => showWhichOne(e.target.name)}>
					d8
				</button>
				<button name="d10" onClick={(e) => showWhichOne(e.target.name)}>
					d10
				</button>
				<button name="d12" onClick={(e) => showWhichOne(e.target.name)}>
					d12
				</button>
				<button name="d20" onClick={(e) => showWhichOne(e.target.name)}>
					d20
				</button>
				<button name="d100" onClick={(e) => showWhichOne(e.target.name)}>
					d100
				</button>
			</span>
			{showDie.d4 ? (
				<D4 d4Count={d4Count} setD4Count={setD4Count} rollDice={rollDice} />
			) : null}
			{showDie.d6 ? (
				<D6 d6Count={d6Count} setD6Count={setD6Count} rollDice={rollDice} />
			) : null}
			{showDie.d8 ? (
				<D8 d8Count={d8Count} setD8Count={setD8Count} rollDice={rollDice} />
			) : null}
			{showDie.d10 ? (
				<D10
					d10Count={d10Count}
					setD10Count={setD10Count}
					rollDice={rollDice}
				/>
			) : null}
			{showDie.d12 ? (
				<D12
					d12Count={d12Count}
					setD12Count={setD12Count}
					rollDice={rollDice}
				/>
			) : null}
			{showDie.d20 ? (
				<D20
					d20Count={d20Count}
					setD20Count={setD20Count}
					rollDice={rollDice}
				/>
			) : null}
			{showDie.d100 ? (
				<D100
					d100Count={d100Count}
					setD100Count={setD100Count}
					rollDice={rollDice}
				/>
			) : null}
		</div>
	)
}

export default App
