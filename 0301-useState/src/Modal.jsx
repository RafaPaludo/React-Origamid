import React from 'react'

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <>
        <div>This is a modal</div>
        <button onClick={() => setModal(false)}>Close</button>
      </>
    )
  }

  return null;
}

export default Modal