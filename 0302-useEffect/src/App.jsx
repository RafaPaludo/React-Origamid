import React from "react";
import Product from "./Product";
import Section from "./Exercice/Section";

const App = () => {
  const [count, setCount] = React.useState(0);

  console.log('Execute allways something changes');

  /*
    UseEffect is a hook that will execute a callback. It will execute once if there's no dependency ([]), but if a dependency is passed, will execute every time it changes.
    Execute once:

    React.useEffect(() => {
      console.log('Execute once component is mounted')
    }, []);

    Execute every time "count" changes:

    React.useEffect(() => {
      console.log('Execute allways "count" changes')
    }, [count]);
  */
  React.useEffect(() => {
    console.log('Execute once component is mounted')
  }, []);

  React.useEffect(() => {
    console.log('Execute allways "count" changes')
  }, [count]);

  const [active, setActive] = React.useState(false);

  
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      
      <hr />

      {active && <Product />}
      <button onClick={() => setActive(!active)}>Active</button>

      <hr />

      <Section />
    </>
  );
}

export default App;