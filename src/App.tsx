import React from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
