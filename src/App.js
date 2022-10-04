// import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Container from "./Calculator/Container/Container";
import Screen from "./Calculator/Screen/Screen";
import ButtonBg from "./Calculator/ButtonBg/ButtonBg";
import Button from "./Calculator/Button/Button";

function App() {
  const [calc, setCalc] = useState("");

  const btnValues = [
    ["AC", "DEL", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  const numInput = (e) => {
    e.preventDefault();

    let number = e.target.textContent;
    setCalc((prev) => (prev += number));
  };

  const operatorInput = (e) => {
    e.preventDefault();
    let operator = e.target.textContent;
    setCalc((prev) => (prev += operator));
  };

  const clearInput = (e) => {
    e.preventDefault();
    setCalc("");
  };

  const deleteInput = (e) => {
    e.preventDefault();
    let presentNumbers = calc.toString();
    let delNumbers = presentNumbers.slice(0, -1);
    setCalc((prev) => (prev = delNumbers));
  };

  const output = (e) => {
    e.preventDefault();
    //eslint-disable-next-line
    setCalc((prev) => eval(prev));
  };

  const numbers = btnValues.flat().map((btn) => {
    return (
      <Button
        key={btn}
        value={btn}
        className={
          btn === "AC" ||
          btn === "DEL" ||
          btn === "/" ||
          btn === "*" ||
          btn === "-" ||
          btn === "+" ||
          btn === "="
            ? "operator"
            : "key"
        }
        onClick={
          btn === "AC"
            ? clearInput
            : btn === "DEL"
            ? deleteInput
            : btn === "/" || btn === "*" || btn === "-" || btn === "+"
            ? operatorInput
            : btn === "="
            ? output
            : numInput
        }
      />
    );
  });

  return (
    <Container>
      <Screen value={calc} />
      <ButtonBg>{numbers}</ButtonBg>
    </Container>
  );
}

export default App;
