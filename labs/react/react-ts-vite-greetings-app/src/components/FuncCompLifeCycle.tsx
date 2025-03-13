import { useState, useEffect } from "react";

function FuncCompLifeCycle() {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log("[FunctionalComponent] Component Mounted");

    return () => {
      console.log(
        "[FunctionalComponent] Component Will Unmount - Cleanup here!"
      );
    };
  }, []);

  // Equivalent to componentDidUpdate for `count`
  useEffect(() => {
    console.log("[FunctionalComponent] Count Updated:", count);
  }, [count]);

  return (
    <div className="container bg-warning mt-3 p-2 text-white">
      <h3 className="h-3">[FunctionalComponent] Count: {count}</h3>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default FuncCompLifeCycle;
