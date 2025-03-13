import { useState } from "react";

const Counter: React.FC = () => {
  //   let timeElapsed = 0;

  // let [state, setState] = useState(initialState)

  console.log("Rendering Counter Component");

  //   let [timeElapsed, setTimeElapsed] = useState<number>(0);
  // function increment() {
  //     console.log("Increment called...");
  //     console.log("Previous: " + timeElapsed);
  //     if (timeElapsed < 3) {
  //       setTimeElapsed(timeElapsed + 1);
  //     }
  //     // console.log("After: " + timeElapsed);
  //   }

  let [timer, setTimer] = useState({ count: 0, increment: 1 });

  function increment() {
    console.log("Increment called...");
    // console.log("Previous: " + timer.count);

    setTimer({ ...timer, count: timer.count + timer.increment });

    // console.log(timer.count + timer.increment);
    // setTimer(...timer, count: timer.count + timer.increment);
    // console.log("After: " + timeElapsed);
  }

  console.log("Current: " + timer.count);

  return (
    <>
      <p>
        <span>Time Elapsed: {timer.count} </span>
        <span>
          <button onClick={increment}>Increment</button>
        </span>
      </p>
    </>
  );
};

export default Counter;
