import React from "react";
import Form from "./Form/Form";

const Title = (props) => {
  return (
    <>
      <h1 style={{ color: props.color }}>{props.text}</h1>
    </>
  );
}

const App = () => {
  return (
    <>
      <Title text="My title 1" color="green" />
      <Title text="My title 2" color="cyan" />
      <Title text="My title 3" />
      <hr />
      <Form />
    </>
  );
}

export default App;