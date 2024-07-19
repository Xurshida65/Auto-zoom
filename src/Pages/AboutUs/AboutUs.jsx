import { useTranslation } from "react-i18next";
import Footer from "../../Components/Footer/Footer"
import styles from "../AboutUs/About.module.css"

export const AboutUs = () => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.aboutContainer}>
      <a href="/" className={styles.link_to_home}>
        {t("Luxury Cars for Rent in Dubai")} /
        <span> AboutUs2</span>
      </a>
      <h2 className={styles.title}>{t("about us")}</h2>
      <div className={styles.text_box1}>
        <h2>{t("Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!")}</h2>
        <p>{t("In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.")}</p>
      </div>
      <div className={styles.text_box2}>
        <h3 className={styles.title_text_box2}>{t("Why Auto Zoom?")}</h3>
        <div className={styles.small_text_box}>
          <h4>{t("Elegant Car Fleet:")}</h4>
          <span> {t("We provide you the opportunity to choose from our luxurious car fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.")}</span>
        </div>
        <div className={styles.small_text_box}>
          <h4>{t("Worry-Free Rental:")}</h4>
          <span> {t("Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience.")}</span>
        </div>
        <div className={styles.small_text_box}>
          <h4>{t("Transparency and Trust:")}</h4>
          <span> {t("We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear..")}</span>
        </div>
        <div className={styles.small_text_box}>
          <h4>{t("Service at Your Level:")}</h4>
          <span> {t("Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.")}</span>
        </div>
      </div>
      <div className={styles.text_box3}>
      <div className={styles.small_text_box2}>
          <h4>{t("Our Mission:")}</h4>
          <span>{t("Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.")}</span>
        </div>
        <div className={styles.small_text_box2}>
          <h4>{t("Contact Us:")}</h4>
          <span>{t("Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.")}</span>
        </div>
      </div>
    </div>
    </div>
  
    </>
  )
}
