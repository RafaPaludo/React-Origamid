import React from "react";

const App = () => { 
  const handleClick = ({target}) => {
    console.log('This is clicked element: ', target);
  }

  const handleScroll = (e) => {
    console.log(e);
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div>Scroll me!!</div>
      <div style={{ height: '200vh' }}></div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;