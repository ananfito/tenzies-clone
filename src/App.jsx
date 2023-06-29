import { useState, useEffect } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function generateNewDie() {
    return  {
      value: Math.floor((Math.random() * 6) + 1),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  const diceElements = diceNumbers.map((die) => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
    />
    ))

  function getNewDice() {   
    if (tenzies) { 
      setTenzies(false)
      setDiceNumbers(allNewDice())
    } else {
      setDiceNumbers(oldDice => oldDice.map(die => {
        if (die.isHeld) {
          return die
        } else {
          return generateNewDie()
        }
      }))
    }
    
  }

  function holdDie(id) {
    setDiceNumbers(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die 
    }))
  }

  useEffect(() => {
    const allHeld = diceNumbers.every(die => die.isHeld) // returns `true` when every die's isHeld = true
    const firstValue = diceNumbers[0].value
    const allSame = diceNumbers.every(die => die.value === firstValue) // returns `true` when every die's value is the same

    if (allHeld && allSame) {
      setTenzies(true)
    }
  }, [diceNumbers])

  return (
    <main className='container'>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button 
        onClick={getNewDice} 
        className='roll-btn'
      >
          { tenzies ? 'New Game' : 'Roll' }
      </button>
    </main>
  )
}

export default App
