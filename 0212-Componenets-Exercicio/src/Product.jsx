import React from 'react'

const Product = ({ product }) => {
  const { nome, propriedades } = product
  return (
    <>
      <section style={{ border: '1px solid' }}>
        <h2>{nome}</h2>
        <ul>
          { propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>) }
        </ul>
      </section>
    </>
  )
}

export default Product