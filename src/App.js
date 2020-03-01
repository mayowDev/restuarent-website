import React from "react";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Services from "./components/Services";
import Menu from "./components/Menu";

function App() {
  return (
    <div className='App'>
      <Header />
      <Locations />
      <Services />
      <Menu />
    </div>
  );
}

export default App;
