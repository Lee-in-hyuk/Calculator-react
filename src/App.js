import Display from './components/display';
import Keypad from './components/keypad';
import Button from './components/button';
import { useState, useCallback } from 'react';


//https://ichi.pro/ko/react-jsleul-sayonghayeo-gandanhan-gyesangi-mandeulgi-259193783442851
// 이거 보면서 작성완성 시켜보기

import './App.css';
//eval함수써서 해보기 (사칙연산을 해주는 함수)
function App() {
  const [ input, setInput ] = useState("");
  console.log(input);

  //onChange 없어도 작동은 잘 되는데, value를 onChange없이 썼다고 console에 경고떠서 작성함.
  const onChange = useCallback((e)=>{
    const btnValue = e.target.value;
    setInput(btnValue);
  },[])

  function onClick(e){
    const btnValue = e.target.value;
    setInput([
      ...input,
      btnValue
    ]);
  }

  // C버튼 클릭 시 "" 값이 들어가는 함수
  function reset(e){
    const btnValue = e.target.value;
    setInput(btnValue);
  }

  // function add

  return (
    <div className="App">
      <Display input={input} onChange={onChange}/>
        <Keypad>
            <Button label="C" value="" onClick={reset}/>
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
