import React from 'react'

const Title = ({ color, children }) => {
  return (
    <h1 style={{ color }}>{children}</h1>
  )
}

export default Title