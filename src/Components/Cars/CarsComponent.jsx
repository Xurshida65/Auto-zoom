import styles from "../Cars/CarsComponent.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TbUvIndex } from "react-icons/tb";

export const CarsComponent = () => {
    const [cars, setCars] = useState([]);
    const { t, i18n } = useTranslation();
    const urlimg = "https://realauto.limsa.uz/api/uploads/images/";

    const getCars = () => {
        fetch(`https://realauto.limsa.uz/api/cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data?.data || []);
            }).catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCars();
    }, []);

    const groupCarsByCategory = (cars) => {
        const groupedCars = {};

        cars.forEach((car) => {
            const categoryId = car?.category?.id;

            if (!groupedCars[categoryId]) {
                groupedCars[categoryId] = {
                    categoryName: car?.category?.name_en,
                    cars: []
                };
            }
            groupedCars[categoryId]?.cars?.push(car);
        });

        return groupedCars;
    }

    const groupedCars = groupCarsByCategory(cars);

    const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className={styles.big_contaner}>
<div className={styles.carsContainer}>
            {Object.keys(groupedCars).map((categoryId) => (
                <div key={categoryId} className={styles.budget}>
                    <div className={styles.top}>
                        <h2 className={styles.title}>{groupedCars[categoryId]?.categoryName.toUpperCase()}</h2>
                        <Link to={`/cars/${categoryId}`} className={styles.btnSee}>
                            {t("SEE ALL")}
                            <IoMdArrowDroprightCircle className={styles.icon} />
                        </Link>
                    </div>
                    <Swiper
                        className={styles.swiper}
                        spaceBetween={40}
                        slidesPerView={3}
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            450: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {groupedCars[categoryId]?.cars.map((car, index) => (
                           <SwiperSlide className={styles.swiperSlide} key={index}>
                           <div className={styles.box}>
                               <Link to={`/carsdetails/${car?.id}`} href="#">
                                   <div className={styles.swiperSlideChild}>
                                       <img
                                           className={styles.img}
                                           src={`${urlimg}${car.car_images[0]?.image?.src}`}
                                           alt={car.category.name_en}
                                       />
                                   </div>
                               </Link>
                               <h3 className={styles.slide_car_title}>{car.brand.title} {car.model.name}</h3>
                               <div className={styles.line}></div>
                               <h4 className={styles.slide_car_price}>
                                   <span className={styles.slide_car_price_aed}>AED {car.price_in_aed}</span>

                                   <span className={styles.slide_car_price_usd}> / $ {car.price_in_usd}</span>
                               </h4>
                               <p className={styles.renta_type}>{t("per day")}</p>
                           </div>
                       </SwiperSlide>
                       
                        ))}
                    </Swiper>
                </div>
            ))}
        </div>
        </div>
    );
};
