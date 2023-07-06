import { useState, useEffect } from 'react'
import './App.css'
import Die from './Die.jsx'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const storedBestTime = JSON.parse(localStorage.getItem('bestTime'))
  const [bestTime, setBestTime] = useState(storedBestTime)

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
    // check for game win
    if (tenzies) { 
      setTenzies(false)
      setDiceNumbers(allNewDice())
      setRolls(0)
      setTime(0)
    } else {
      setRunning(true)
      setDiceNumbers(oldDice => oldDice.map(die => {
        if (die.isHeld) {
          return die
        } else {
          return generateNewDie()
        }
      }))
      setRolls(prevRolls => prevRolls + 1)
    }
  }

  function holdDie(id) {
    setDiceNumbers(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die 
    }))
  }

  // Game Win
  useEffect(() => {
    const allHeld = diceNumbers.every(die => die.isHeld) // returns `true` when every die's isHeld = true
    const firstValue = diceNumbers[0].value
    const allSame = diceNumbers.every(die => die.value === firstValue) // returns `true` when every die's value is the same

    if (allHeld && allSame) {
      setTenzies(true)
      setRunning(false)
      if (storedBestTime > time) {
        setBestTime(time)
      }
      
    }
  }, [diceNumbers])

  // Start game clock
  useEffect(() => {
    let interval

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else if (!running) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [running])

  // Best time
  // Save highest game time
  // useEffect
  // when `tenzies` is true, store `time` to localStorage
  // conditionally render `Best Time` and recalculate (b/c `time` is in milliseconds)
  useEffect(() => {
    console.log(storedBestTime)
    localStorage.setItem('bestTime', JSON.stringify(bestTime))
  }, [bestTime])

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
      <div className="game-stats">
        <p className='rolls'>Rolls: {rolls}</p>
        <p>Game Time:
          <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </p>
        <p>Best Time:
          <span> {storedBestTime ? ("0" + Math.floor((storedBestTime / 60000) % 60)).slice(-2) : "00"}:</span>
          <span>{storedBestTime ? ("0" + Math.floor((storedBestTime / 1000) % 60)).slice(-2) : "00"}</span>
        </p>
      </div>
    </main>
  )
}

export default App
