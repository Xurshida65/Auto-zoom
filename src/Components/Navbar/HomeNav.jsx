import React from 'react'
import './Home.css'
import SwiperC from './SwiperC'
import { useTranslation } from 'react-i18next';

const HomeNav = () => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange
  
  return (
    <div className='Home'>
        <div className="container">
         
       <div className="homeNav">
       <div className="title">
        <h1 className='home_title'>
          {t("TOP LUXURY CAR")} <br />
         
         {t("RENTAL DUBAI")}
         </h1>
        </div>
        <div>
        <p className='home_text'>
         {t("Best sports car & supercar rental Dubai, Exclusive offers on luxury car rental")} <br />
          {t("Dubai Cheap price")}
         </p>
        </div>
       <div>
          <a className='homeNav_link' href="#">{t("RENT A CAR DUBAI CATALOG")}</a>
       </div>
       </div>
      
        </div>

<div className="swipper_slider">
  <SwiperC /> 

</div>
     
  
    </div>
  )
}

export default HomeNav
