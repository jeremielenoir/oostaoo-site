import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Technos from "./components/Technos";
import References from "./components/References";
import Contact from "./components/Contact";
import CarouselNew from "./components/CarouselNew";

import "./App.scss";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3edac6',
      contrastText: "#fff",
    },
    secondary: {
      main: '#3edac6',
      contrastText: "#fff",
    }
  }
});






function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Header id="accueil" />
      <Introduction />
      <Services id="services" />
      <Technos id="technos" />
      <References id="references" />
      <CarouselNew id="job" />
      <Contact id="contact" />
    </ThemeProvider>
  );
}

export default App;
