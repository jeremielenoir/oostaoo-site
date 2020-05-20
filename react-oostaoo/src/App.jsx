import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Technos from './components/Technos';
import References from './components/References';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Introduction/>
    <Services/>
    <Technos/>
    <References/>
    <Contact/>
</>
  );
}

export default App;
