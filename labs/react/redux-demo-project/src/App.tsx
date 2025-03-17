import React from "react";
import Counter from "./features/counter/Counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Redux Counter Example</h1>
      <Counter />
    </div>
  );
};

export default App;
