import React from 'react'

export default function Die(props) {
  const {id, value, holdDie} = props
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }

  return (
    <div className='die-face' style={styles} onClick={holdDie}>
        <h2 className='die-num'>{value}</h2>
    </div>
  )
}