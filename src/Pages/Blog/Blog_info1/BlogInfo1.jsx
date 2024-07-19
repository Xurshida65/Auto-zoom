import styles from "../Blog_info1/BlogInfo1.module.css"
import img from "../../../assets/blog11.jpg"
import Footer from "../../../Components/Footer/Footer"
import { useTranslation } from "react-i18next";

export const BlogInfo1 = () => {
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
                <h2 className={styles.title}>{t("TOP 3 DESTINATIONS TO VISIT FROM DUBAI IN A RENTAL CAR")}</h2>
                <p className={styles.text}>{t("One of")}</p>
                <p className={`${styles.text} ${styles.city_name}`}>{t("Abu-Dhabi")}</p>
                <img src={img} alt="car_photo" className={styles.img}/>
                <p className={styles.text}>{t("If the combination")}</p>
            </div>
           </div>

        </>
    )
}
