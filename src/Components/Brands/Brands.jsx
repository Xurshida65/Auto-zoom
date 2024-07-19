import React, { useEffect, useState } from 'react';
import './Brands.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Brands = () => {
  const base_URL = 'https://realauto.limsa.uz';
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${base_URL}/api/brands`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setBrands(data.data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='BrandWrapper'>
      <div className="container">
        <div className="Brands-Swiper-flex">
          <h2 className="brands-title">BRANDS</h2>
          <Swiper
            slidesPerView={3}
            grid={{ rows: 1 }}
            spaceBetween={50}
            pagination={{ clickable: true }}
            modules={[Grid, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1, grid: { rows: 1 } },
              768: { slidesPerView: 2, grid: { rows: 1 } },
              1024: { slidesPerView: 3, grid: { rows: 1 } },
            }}
          >
            {brands.length > 0 ? (
              brands.map((brand) => (
                <SwiperSlide key={brand.id} className='swiper-slidebrand'>
                  <div className="box">


                  <Link onClick={() => scrollTo({top:0})}  to={`/cars/${brand?.id}`} href="#">
                                      
                    <img
                      className='brandsLogo'
                      src={`${base_URL}/api/uploads/images/${brand.image_src}`}
                      alt={brand.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150';
                      }}
                    />  
                               </Link>


                 
                    <h5>{brand.title}</h5>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide className='swiper-slidebrand'>
                <div className="box">
                  <h5>No Brands Available</h5>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brands;
