import { useState } from "react";
import "./App.scss";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
