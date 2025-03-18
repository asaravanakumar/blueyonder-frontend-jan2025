import "./App.css";

import AppRoutes from "./routes/routes";

import { setAuthToken } from "./helpers/setAuthToken";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
