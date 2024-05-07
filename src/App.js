import { useState } from 'react';
function App() {
  const [cal, setcal] = useState("");
  const [res, setres] = useState("");
  const oper = ['+', '-', '*', '/', '.'];
  const updatecal = val => {
    if(oper.includes(val) && cal==='' ||oper.includes(val) && oper.includes(cal.slice(-1)) )
      {
        return;
      }
    setcal(cal+val);

    if(!oper.includes(val))
      {
        setres(eval(cal+val).toString());
      }
  }
  const caldigits = () => {
    const digits = [];
    for (let i = 1; i <= 9; i++) {
      digits.push(<button onClick={()=>updatecal(i.toString())}key={i}>{i}</button>)
    }
    return digits;
  }
  const calculate=()=>{
    setcal(eval(cal).toString());
  }

  const deleting=()=>
    {
      if(cal==='')
        return;
      const val=cal.slice(0,-1);
      setcal(val);
      if (oper.includes(val.slice(-1))) {
        setres(eval(val.toString().slice(0,-1)));  
      }
      else{
        setres(eval(val.toString()));  
      }
      }
      const handleClear = () => {
        setcal('');
      }
  return (
    <div className="App">
      <div className="calci">
        <div className="display">
        {res? <span>({res})</span>:''} &nbsp; &nbsp;
        {cal||"0"}
        </div>
        <div className="ops">
          <button onClick={()=>updatecal('+')}>+</button>
          <button onClick={()=>updatecal('-')}>-</button>
          <button onClick={()=>updatecal('*')}>*</button>
          <button onClick={()=>updatecal('/')}>/</button>
          <button onClick={deleting}>del</button>
          <button onClick={handleClear}>clear</button>
        </div>
        <div className="digits">
          {caldigits()}
          <button onClick={()=>updatecal('0')}>0</button>
          <button onClick={()=>updatecal('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
