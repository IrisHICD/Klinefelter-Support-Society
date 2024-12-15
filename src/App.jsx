import { useState } from "react";
import "./App.scss";
import LandingPage from "./pages/landingPage/landingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
