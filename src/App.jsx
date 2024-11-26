import { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Footer from "./components/footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Info />
      <Footer />
    </>
  );
}

export default App;
