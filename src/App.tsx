import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [res, setRes] = useState({ status: "none" });

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = import.meta.env.VITE_URL;
      console.log(BASE_URL);
      try {
        const response = await fetch(BASE_URL + "/error");
        console.log(response);
        // if (!response.ok) {
        //   throw new Error("error load");
        // }
        const data = await response.json();
        setRes(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{res.status}</p>
    </>
  );
}

export default App;
