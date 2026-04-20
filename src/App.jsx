import { useState } from "react";
import pkg from "../package.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Semantic Version Demo</h1>

      <h2>Version: {pkg.version}</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;