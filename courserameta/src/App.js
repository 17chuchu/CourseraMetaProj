import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './Sections/Header'
import { ChakraProvider } from "@chakra-ui/react";
import Highlights from './Sections/Highlights/Highlights'
import MetaTags from './Component/MetaTags'
import HeroSection from './Sections/HeroSection/HeroSection'
import Testimonials from './Sections/Testimonials/Testimonials'
import BookingForm from './Sections/BookingForm/BookingForm'
import About from './Sections/About/About'
import Footer from './Sections/Footer/Footer'

function App() {
  return (
    <div>
      <MetaTags/>
      <ChakraProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <main>
              <Header/>
              <HeroSection/>
              <Highlights/>
              <Testimonials/>
              <About/>
              <Footer/>
            </main>
          }></Route>
          <Route path="/booking" element={<BookingForm/>}></Route>
        </Routes>
        </BrowserRouter>
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