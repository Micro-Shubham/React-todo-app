import "./App.css";

import { useState, useRef } from "react";

function App() {
  let nextId = useRef(0);
  // let item = "";
  const [value, setValue] = useState("");
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);
  //remove item handler
  const handlerRemoveItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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
          if (value != "") {
            setItems((prevItems) =>
              prevItems.concat({ id: nextId.current++, text: value })
            );
          }
          setValue("");
        }}
      >
        Click me!
      </button>
      {/* Render  the list  of items  */}
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handlerRemoveItem(item.id)}
          style={{cursor:"pointer"}}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
