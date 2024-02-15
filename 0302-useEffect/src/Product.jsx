import React from 'react'

const Product = () => {
  React.useEffect(() =>{
    window.addEventListener('scroll', handleScroll);

    /*
      The return is a way to execute a callback function right before a component leave the page. Allows us to make animations and other stuff
    */
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = (event) => {
    console.log(event)
  }

  return (
    <>
      <p style={{ height: '150vh' }}>Product</p>
    </>
  )
}

export default Product