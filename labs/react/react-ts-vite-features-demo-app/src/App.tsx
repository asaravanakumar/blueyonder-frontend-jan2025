import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from "./components/HelloWorld";
import HelloMessage from "./components/HelloMessage";
import Counter from "./components/Counter";

function App() {
  let user = "Ram";
  let message = {
    name: "Raju",
    message: "Hello",
  };
  return (
    <main className="mx-5">
      <h3>UseCase 1 - Components, Props and States </h3>
      <HelloWorld />
      <h5>Single Prop</h5>
      <HelloMessage name="Euler" />
      <h5>Multiple Props</h5>
      {/* <HelloMessage name="Raju" message="Hello" /> */}
      <HelloMessage {...message} />
      <h5>State and Virtual DOM</h5>
      <Counter />
      <h5>Interactive Component - Event Handling </h5>
    </main>
  );
}

export default App;
