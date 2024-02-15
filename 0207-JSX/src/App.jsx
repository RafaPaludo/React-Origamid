import React from "react";
import Exercice from './Exercice';
import Arrays from './Arrays';
import ExerciceArrays from './ExerciceArrays';



const App = () => {
  const name = 'Rafael';
  const active = false;
  const car = {
    wheels: 4,
    electric: false
  }
  const styleJS = {
    color: 'blue',
    padding: '20px',
    fontSize: '2rem'
  }

  const fullName = (name, surname) => {
    return `${name} ${surname}`;
  }
  
  return (
    // React Fragment
    <>
      {/* You can add atributes as well as HTML, despite some ones, class -> className, for -> htmlFor ... */}
      <a href="https://google.com" title="Google site" className="active"> 
        Google
      </a>
      <hr />
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" placeholder={name} className={active ? 'active' : 'inactive'} />
      <hr />
      <p>
        My name is: {fullName('Rafael', 'Paludo')}
      </p>
      <hr />
      <p style={styleJS}>
        The car has {car.wheels} wheels and {car.electric ? 'is' : 'isn\'t'} electric
      </p>
      <hr />
      <Exercice />
      <Arrays />
      <ExerciceArrays />
    </>
  );
}

export default App;