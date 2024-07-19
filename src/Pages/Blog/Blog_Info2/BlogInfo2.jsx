import styles from "../Blog_Info2/BlogInfo2.module.css"
import img from "../../../assets/blog2.jpg"
import Footer from "../../../Components/Footer/Footer"
import { useTranslation } from "react-i18next";

export const BlogInfo2 = () => {

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange
  
  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.blog_info_container}>
        <a href="/" className={styles.link_to_home}>
            {t("Luxury Cars for Rent in Dubai")} /
            <span> {t("Blog")} /</span>
            <span> {t("Top 5 Reasons to Rent a Car Dubai")}</span>
        </a>
        <h2 className={styles.title}>{t("Top 5 wonderful spots for a car photo session in Dubai")}</h2>
        <p className={styles.text}>{t("There are so many")}</p>
        <p className={`${styles.text} ${styles.city_name}`}>{t("Palm Jumeriah")}</p>
        <img src={img} alt="car_photo" className={styles.img}/>
        <p className={styles.text}>{t("The Palm Jumeirah")}</p>
    </div>
    </div>

</>
  )
}
