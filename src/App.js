// import React from "react";
// import ReactDOM from "react-dom/client";
import Container from './Calculator/Container';
import Screen from './Calculator/Screen';
import ButtonBg from './Calculator/ButtonBg';
import Button from './Calculator/Button';

// let value = [1,2,3];

function App() {
  return (
    <Container>
      <Screen />
      <ButtonBg>
        <Button className="operator" value="AC" />
        <Button className="operator" value="DEL" />
        <Button className="operator" value="/" />
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button className="operator" value="*" />
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button className="operator" value="+" />
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button className="operator" value="-" />
        <Button value="0" />
        <Button value="." />
        <Button className="operator" value="=" />
      </ButtonBg>
    </Container>
  );
}

export default App;
