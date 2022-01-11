import Display from './components/display';
import Keypad from './components/keypad';
import Button from './components/button';
import { useState,useRef, useCallback } from 'react';

import './App.css';
//eval함수써서 해보기 (사칙연산을 해주는 함수)
function App() {
  const [ input, setInput ] = useState("");
  // console.log(input);
  const onChange = useCallback((e)=>{
    const btnValue = e.target.value;
    setInput(btnValue);
  },[input])

  function onClick(e){
    const btnValue = e.target.value;
    setInput(btnValue);
  }
  return (
    <div className="App">
      <Display input={input} onChange={onChange}/>
        <Keypad>
            <Button label="C" value="clear" />
            <Button label="7" value="7" onClick={onClick}/>
            <Button label="4" value="4" onClick={onClick}/>
            <Button label="1" value="1" onClick={onClick}/>
            <Button label="0" value="0" onClick={onClick}/>

            <Button label="/" value="/" />
            <Button label="8" value="8" onClick={onClick}/>
            <Button label="5" value="5" onClick={onClick}/>
            <Button label="2" value="2" onClick={onClick}/>
            <Button label="." value="." />

            <Button label="x" value="*" onClick={onClick}/>
            <Button label="9" value="9" onClick={onClick}/>
            <Button label="6" value="6" onClick={onClick}/>
            <Button label="3" value="3" onClick={onClick}/>
            <Button label="" value="null" />

            <Button label="-" value="-" />
            <Button label="+" size="2" value="+" />
            <Button label="=" size="2" value="equal" />
        </Keypad>
    </div>
  );
}

export default App;
