import React from 'react'

export default function Die(props) {
  const {id, value, holdDie} = props
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  }

  let dieFace
  switch (value) {
    case 1:
      dieFace = (
        <div className='die-face' style={styles} onClick={holdDie}>
            <span className="pip"></span>
        </div>
      )
      break;
    case 2: 
      dieFace = (
        <div className='die-face' style={styles} onClick={holdDie}>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>
      )
      break;
    case 3:
    dieFace = (
      <div className='die-face' style={styles} onClick={holdDie}>
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
      </div>
    )
    break;
    case 4:
      dieFace = (
        <div className='die-face' style={styles} onClick={holdDie}>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>
      )
      break;
    case 5:
      dieFace = (
        <div className='die-face' style={styles} onClick={holdDie}>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>
      )
      break;
    case 6:
      dieFace = (
        <div className='die-face' style={styles} onClick={holdDie}>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
        </div>
      )
  }

  return (
    <div>{dieFace}</div>
  )
}
