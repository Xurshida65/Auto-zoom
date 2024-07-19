import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import { Contact } from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import './App.css';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import { Services } from './Pages/Services/Services';
import { SportCarRent } from './Pages/Services/sport_car_rent/SportCarRent';
import { Photoshoot } from './Pages/Services/photoshoot/Photoshoot';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import SinglePage from './Pages/SinglePage/SinglePage';
import Footer from './Components/Footer/Footer';
import { BlogInfo1 } from './Pages/Blog/Blog_info1/BlogInfo1';
import { BlogInfo2 } from './Pages/Blog/Blog_Info2/BlogInfo2';
import { BlogInfo3 } from './Pages/Blog/Blog_Info3/BlogInfo3';
import { Terms } from "./Pages/Privacy/Terms";


function App() {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);


  const [cars, setCars] = useState([])
  return (
    <div>
      <>
        {loader ? "" : <Loader />}
        <Navbar setLoader={setLoader} setCars={setCars}/>
        <Routes>
          <Route path="/" element={<Home setCars={setCars}/>} />
          <Route path="/cars" element={<Cars setCars={setCars} cars={cars}/>} />
          <Route path="/cars/:id"  element={<Cars setCars={setCars} cars={cars}/>} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/carsdetails/:id" element={<SinglePage />} />
            <Route path="*" element={<Home />} />
            <Route path="/sport_car_rent" element={<SportCarRent />} />
            <Route path="/photoshoot" element={<Photoshoot />} />
            <Route path="/blog_info1" element={<BlogInfo1 />} />
            <Route path="/blog_info2" element={<BlogInfo2 />} />
            <Route path="/blog_info3" element={<BlogInfo3 />} />
            <Route path="/termsCondition" element={<Terms />} />
        </Routes>
        <Footer setCars={setCars}/>
      </>
    </div>
  );
}

export default App;
