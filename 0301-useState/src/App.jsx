import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
import Exercice from "./Exercice";

const App = () => {
  /*
    UseState returns and array with a value that was initialized and a function to update it
    It can be used like this:

    const hookActive = React.useState(false);
    const activeValue = hookActive[0];
    const activeFunction = hookActive[1];

    But commonly used like this (destructuring array): 
    const [active, setActive] = React.useState(false);
  */ 
  const [active, setActive] = React.useState(true);
  const [user, setUser] = React.useState({ name: 'Rafael', age: '26' });
  const handleClick = () => {
    setActive(!active)
    setUser({ ...user, working: true })
  }

  /*
    We can pass states as props to nested components
  */
  const [modal, setModal] = React.useState(false);

  /*
    We can pass a callback to update state. It allows us to use the previous value
  */
  const [enable, setEnable] = React.useState(true);
  const enableClick = () => {
    setEnable((prev) => !prev)
  }
  
  
  return (
    <>
      <p>Name: { user.name }</p>
      <p>Age: { user.age }</p>
      { user.working && <p>Is working!</p> } 

      <button onClick={handleClick}>{active ? 'Active' : 'Inactive'}</button>
      
      <hr />
      
      <Modal setModal={setModal} modal={modal} /><br></br>
      <ButtonModal setModal={setModal} />

      <hr />

      <p>It {enable ? 'is enabled' : 'is not enabled'} </p>
      <button onClick={enableClick}>{enable ? 'Disable' : 'Enable'}</button>

      <hr />
      <h1>Exercice::</h1>
      <Exercice />
    </>
  );
}

export default App;