import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../HoveredComponent/HoveredComponent.module.css";
import axios from "axios";
import { base_url } from "../../../getData/getData";

const HoveredComponent = ({setCars}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const imgURL = "https://realauto.limsa.uz/api/uploads/images";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://realauto.limsa.uz/api/brands"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data?.data || []);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } 
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }
  const handleFilter =(id)=> {
    axios.get(`${base_url}/cars?brand_id=${id}`).then(res=> {
      setCars(res?.data?.data)
    })
  }
  return (
    <div>
      <ul className={styles.container}>
        {data.map((item, index) => (
          <Link to={`/cars/${item.id}`} className={styles.small_container} key={index}>
            <li className={styles.item}>
              <img
                src={`${imgURL}/${item?.image_src}`}
                alt={item?.title}
                className={styles.img}
              />
              <Link to={`/cars/${item?.id}`} onClick={()=>handleFilter(item?.id)}>
                <span className={styles.bold}>Rent</span>
                <span className={styles.name}>{item?.title}</span>
                <span className={styles.bold}>Dubai</span>
              </Link>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HoveredComponent;
