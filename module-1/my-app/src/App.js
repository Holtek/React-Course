import React from "react";
import "./App.css";
import Person from "./Person/person";
function App() {
  return (
    <div className="App">
      <h1>hi am a react app</h1>
      <p>jsx kinda sux</p>
      <Person name="Too" age="13"></Person>
      <Person name="Boo" age="23">
        My Hobbies: Racing
      </Person>
      <Person name="Goo" age="33"></Person>
    </div>
  );
  // return React.createElement("div", null, "h1", "Hi i'm a react app");
}

export default App;
