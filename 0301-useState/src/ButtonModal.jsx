import React from 'react'

const ButtonModal = ({ setModal }) => {
  return (
    <button onClick={() => setModal(true)}>Open</button>
  )
}

export default ButtonModal