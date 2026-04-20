import { useState } from "react";
import pkg from "../package.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial"
    }}>
      <h1>🚀 Version {pkg.version}</h1>

      <div style={{
        border: "2px solid #333",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"
      }}>
        <h2>Counter: {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          ➕ Increment
        </button>

        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default App;