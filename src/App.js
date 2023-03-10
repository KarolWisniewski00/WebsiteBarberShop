import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Gallery from "./components/Gallery/Gallery"
import Price from "./components/Price/Price"
import Contact from "./components/Contact/Contact"
import Artist from "./components/Artist/Artist"

function App() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Artist/>
      <Gallery/>
      <Price/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;