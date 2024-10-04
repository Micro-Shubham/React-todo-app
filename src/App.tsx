import "./App.css";

import { useState } from "react";

function App() {
  let nextId = 0;
  // let item = "";
  const [value, setValue] = useState("");
  const [items, setItems]  = useState<{id:number ;text:string}[]>([]);

  return (
    <>
      <h1>ToDo App</h1>
      <input
        placeholder="do somthing...."
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {/* <Input ></Input> */}
      {/* <Button></Button> */}
      <button
        id="btn"
        onClick={() => {
          if(value !="") {
            setItems((prevItems) =>
            prevItems.concat({id:nextId, text:value}) 
            );
          }
          setValue("");
        }}
      >
        Click me!
      </button>
      {/* Render  the list  of items  */}
      <ul>
        {items.map((item) =>(
          <li key={item.id}>{item.text}</li> //Display  each items text
        ))}
      </ul>
    </>
  );
}

export default App;
