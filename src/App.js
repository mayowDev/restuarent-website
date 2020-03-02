import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBirthdayCake, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons'

import Header from "./components/Header";
import Locations from "./components/Locations";
import Services from "./components/Services";
import Menu from "./components/Menu";

library.add(fab, faBirthdayCake, faUtensils, faHamburger)

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
