import React from 'react'
import {CarsComponent } from '../../Components/Cars/CarsComponent';
import HomeNav from '../../Components/Navbar/HomeNav';
import Brands from '../../Components/Brands/Brands';
import { Services } from '../Services/Services';
import Faq from '../../Components/Faq/Faq';

import { YoutubeVideo } from '../../Components/YoutubeVideo/YoutubeVideo';
// import { Contact } from '../Contact/Contact';
// import { HoveredComponent } from '../../Components/Navbar/HoveredComponent/HoveredComponent';

import FollowUs from '../../Components/FollowUs/FollowUs';



export const Home = ({setCars}) => {
  return (
    <div>
      <HomeNav />
      <Brands />
        <CarsComponent/>
        <Services/>
        <YoutubeVideo/>
        <Faq/>
        <FollowUs setCars={setCars}/>
    </div>
  )
}

export default Home;