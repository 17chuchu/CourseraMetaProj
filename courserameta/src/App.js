import './App.css';
import Header from './Sections/Header'
import { ChakraProvider } from "@chakra-ui/react";
import Highlights from './Sections/Highlights/Highlights'
import MetaTags from './Component/MetaTags'
import HeroSection from './Sections/HeroSection/HeroSection'
import Testimonials from './Sections/Testimonials/Testimonials'
import About from './Sections/About/About'
import Footer from './Component/Footer'

function App() {
  return (
    <div>
      <MetaTags/>
      <ChakraProvider>
        <main>
          <Header/>
          <HeroSection/>
          <Highlights/>
          <Testimonials/>
          <Footer/>
        </main>
      </ChakraProvider>
    </div>
  );
}

export default App;


/*
<HeroSection/>
      <Highlights/>
      <Testimonials/>
      
      <Footer/>
*/