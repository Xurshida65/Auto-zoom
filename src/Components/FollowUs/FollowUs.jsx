import React, { useEffect, useState } from "react";
import FollowImg1 from "../../assets/follow1.webp";
import FollowImg2 from "../../assets/follow2.webp";
import FollowImg3 from "../../assets/follow3.webp";
import FollowImg4 from "../../assets/follow4.webp";
import FollowImg5 from "../../assets/follow5.webp";
import FollowImg6 from "../../assets/follow6.webp";
import "./FollowUs.css";
import { IoClose } from "react-icons/io5";
import { base_url, getCities, getLocations } from "../../getData/getData";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const FollowUs = ({setCars}) => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  const images = [
    FollowImg1,
    FollowImg2,
    FollowImg3,
    FollowImg4,
    FollowImg5,
    FollowImg6,
  ];
  const [activeImg, setActiveImg] = useState(6);
  useEffect(() => {
    getData();
  }, []);
  const [locations, setLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const getData = async () => {
    const locations = await getLocations();
    const cities = await getCities();
    setCities(cities?.data);
    console.log(cities?.data);
    setLocations(locations?.data);
    console.log(locations?.data);
  };
  const filterByLocation = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(`${base_url}/cars?limit=300&location_id=${id}`).then(res=> {
      console.log(res);
      setCars(res?.data?.data)
    })
  }
  const filterByCity = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.get(`${base_url}/cars?limit=300&city_id=${id}`).then(res=> {
      console.log(res);
      setCars(res?.data?.data)
    })
  }
  return (
    <div className="follow">
      <div className="container">
        <div className="follow__items">
          <h2 className="follow__title">{t("FOLLOW US ON INSTAGRAM")}</h2>
          <div className="follow__cards">
            {images?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={activeImg === index ? "follow__card" : ""}
                >
                  <img
                    src={item}
                    alt={item}
                    className="follow__card-img"
                    onClick={() => setActiveImg(index)}
                  />
                  <button
                    className={activeImg === index ? "follow__btn" : "none"}
                    onClick={() => setActiveImg(6)}
                  >
                    <IoClose />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="follow__bottom">
            <div className="follow__links">
              <h3 className="follow__links-title">{t("Location")}</h3>
              <div className="follow__links-item">
                {locations?.map((item, index) => {
                  return <Link to={`/cars/${item?.id}`} key={index} onClick={()=>filterByLocation(item?.id)}>{item?.name}</Link>;
                })}
              </div>
            </div>
            <div className="follow__links">
              <h3 className="follow__links-title">{t("City")}</h3>
              <div className="follow__links-item">
                {cities?.map((item, index) => {
                  return <Link to={`/cars/${item?.id}`} key={index} onClick={()=>filterByCity(item?.id)}>{item?.name}</Link>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
