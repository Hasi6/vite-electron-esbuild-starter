import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import writeJsonFile from "write-json-file";

function App() {
  const [count, setCount] = useState(0);

  const write = async () => {
    // await writeJsonFile("foo.json", { foo: true });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count {count}
          </button>
          <br />

          <button onClick={write}>write {count}</button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
