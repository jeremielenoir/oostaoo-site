import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Technos from './components/Technos';

import './App.scss';

function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Introduction/>
    <Services/>
    <Technos/>
</>
  );
}

export default App;
