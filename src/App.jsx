import { useState, useEffet } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from 'nanoid'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice())

  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.floor((Math.random() * 6) + 1),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  const diceElements = diceNumbers.map((die) => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}/>
    ))

  function getNewDice() {    
    setDiceNumbers(allNewDice())
  }

  return (
    <main className='container'>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button onClick={getNewDice} className='roll-btn'>Roll</button>
    </main>
  )
}

export default App
