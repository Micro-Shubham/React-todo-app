import './App.css'

import { useState } from 'react';

function App() {
  // let item = "";
  let array =['a','b','c','']
  const [Value, setValue] = useState("");

  return (
    <>
     <h1>ToDo App</h1>
     <input placeholder='do somthing....' type='text'value={Value}  onChange={(e) => setValue(e.target.value)} ></input>
 {/* <Input ></Input> */}
    {/* <Button></Button> */}
    <button id="btn" onClick={(event) => { console.log(Value);setValue("");console.log(event)}} >Click me!</button>
    </>
  )

}

export default App
