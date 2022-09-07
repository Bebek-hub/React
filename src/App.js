// import React from "react";
// import ReactDOM from "react-dom/client";
import Container from './Calculator/Container';
import Screen from './Calculator/Screen';
import ButtonBg from './Calculator/ButtonBg';
import Button from './Calculator/Button';

let btnValues = [
  ["AC", "DEL", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  return (
    <Container>
      <Screen />
      <ButtonBg>
          {
          btnValues.flat().map((btn, i) => {
            return (
              <Button 
              key={i}
              value={btn}
              className={btn === "AC" || 
              btn === "DEL" || 
              btn === "/" || 
              btn === "*" || 
              btn === "-" || 
              btn === "+" || 
              btn === "="? "operator" : ""} />
            );
          })
          }

      </ButtonBg>
    </Container>
  );
}

export default App;
