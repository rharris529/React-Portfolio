import React from "react";
import './App.css';
import Footer from '../src/components/Footer';
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <main>
      <Nav>
        <About></About>
        <Resume></Resume>
        <Project></Project>
        <ContactForm></ContactForm>
      </Nav>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
