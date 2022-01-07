import Display from './components/display';
import Keypad from './components/keypad';
import Button from './components/button';
import { useState,useRef } from 'react';

import './App.css';

function App() {
  const [ input, setInput ] = useState("");
  // useCallback함수 써서 Display에 onChange쓰고
  // const onChange = useCallback(e) 써보기
  // console.log(input);
  // console.log(Button.value);
  function onClick(e){
    const btnValue = e.target.value;
    setInput(btnValue);
    console.log(btnValue);
    // input = inputValue; 유즈러프써서 해보기
  }
  return (
    <div className="App">
      <Display input={input.value}/>
        <Keypad>
            <Button label="C" value="clear" />
            <Button label="7" value="7" onClick={onClick}/>
            <Button label="4" value="4" />
            <Button label="1" value="1" />
            <Button label="0" value="0" />

            <Button label="/" value="/" />
            <Button label="8" value="8" />
            <Button label="5" value="5" />
            <Button label="2" value="2" />
            <Button label="." value="." />

            <Button label="x" value="*" />
            <Button label="9" value="9" />
            <Button label="6" value="6" />
            <Button label="3" value="3" />
            <Button label="" value="null" />

            <Button label="-" value="-" />
            <Button label="+" size="2" value="+" />
            <Button label="=" size="2" value="equal" />
        </Keypad>
    </div>
  );
}

export default App;
