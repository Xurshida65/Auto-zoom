import styles from "../Services/Services.module.css"
import img1 from "../../assets/service1.jpg"
import img2 from "../../assets/service2.jpg"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";


export const Services = () => {

  
  const scrolltoTop = () => {
    window.scrollTo(0, 0)
  }

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.serviceContainer}>
      <a href="/" className={styles.link_to_home}>
        {t("Luxury Cars for Rent in Dubai")} /
        <span> {t("Services")}</span>
      </a>
      <h2 className={styles.title}>{t("SERVICES")}</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
            <img src={img1} alt="sports car" className={styles.img}/>
            <h3 className={styles.title_box}>{t("Sports Car Rental Dubai Style Tour in Dubai")}</h3>
            <p className={styles.text_box}>{t("Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!")}</p>
            <Link onClick={scrolltoTop} to="/sport_car_rent" className={styles.link_to_otherpage}>
              {t("Learn more")}
              <IoMdArrowDroprightCircle className={styles.icon}/>
            </Link>
        </div>
        <div className={styles.box}>
            <img src={img2} alt="photoshoot"  className={styles.img}/>
            <h3 className={styles.title_box}>{t("Photoshoot with luxury car rental Dubai")}</h3>
            <p className={styles.text_box}>{t("Professional car photoshoot as an")}<br />{t("additional type of service at Auto Zoom Car Rental")}</p>
            <Link onClick={scrolltoTop} to="/photoshoot" className={styles.link_to_otherpage}>
              {t("Learn more")}
              <IoMdArrowDroprightCircle className={styles.icon}/>
            </Link>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
