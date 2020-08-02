import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar, faBirthdayCake, faUtensils, faHamburger, faSearch, 
  faShoppingBag, faIceCream, faFish , faClock, faUserCheck
} from '@fortawesome/free-solid-svg-icons'

import Header from "./components/Header";
import Locations from "./components/Locations";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Prices from "./components/Prices";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

library.add(
  fab, faIceCream, faFish, faShoppingBag, faClock, faUserCheck,
  faSearch, faBirthdayCake, faUtensils, faHamburger,faCalendar,
  faFacebook, faInstagram, faTwitter, faPinterest)

function App() {
  return (
    <div className='App'>
      <Header />
      <Locations />
      <Services />
      <Menu />
      <Prices/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
