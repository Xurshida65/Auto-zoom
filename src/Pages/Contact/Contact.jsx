import styles from "../Contact/Contact.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";




export const Contact = () => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange


  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.contact_container}>
      <a href="/" className={styles.link_to_home}>
        {t("Luxury Cars for Rent in Dubai")} /
        <span> {t("Contacts")}</span>
      </a>
      <h2 className={styles.title}>{t("HAVE ANY QUESTIONS?")}</h2>
      <div className={styles.text}>
      <p>{t("We would love to help")}</p>
      <p>{t("Auto Zoom Car Rental Dubai, is the best luxury car rental Dubai based company.")}</p>
      </div>
      <div className={styles.text_box}>
        <h3 className={styles.title_text_box}>{t("Head office")}</h3>
          <p className={styles.text_text_box}>
          <IoLocationOutline className={styles.icon} />
          Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
          </p>
          <p className={styles.text_text_box}>
          <IoCallOutline className={styles.icon}/>
          +971 (55) 846 21 24
          </p>
          <p className={styles.text_text_box}>
          <IoMailOpenOutline className={styles.icon}/>
          office@autozoomrental.com
          </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.map_box}>
        <iframe className={styles.map} width="100%" height="350" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=26W8+24J%20-%20Dubai%20Sports%20City%20-%20Dubai%20-%20United%20Arab%20Emirates+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
      </div>
    </div>
    </div>

    </>
  )
}
