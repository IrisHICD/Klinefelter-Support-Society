import React from "react";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Info from "../../components/info/info";
import Footer from "../../components/footer/footer";

export default function landingpage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Info />
      <Footer />
    </div>
  );
}
