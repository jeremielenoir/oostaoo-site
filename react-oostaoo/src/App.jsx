import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Technos from './components/Technos';
import References from './components/References';
import Contact from './components/Contact';
import Carousel from './components/Carousel';

import './App.scss';

function App() {
  return (
    <>
    <Nav/>
    <Header id='accueil'/>
    <Introduction/>
    <Services id='services'/>
    <Technos id='technos'/>
    <References id='references'/>
    <Carousel id='job'/>
    <Contact id='contact'/>
</>
  );
}

export default App;
