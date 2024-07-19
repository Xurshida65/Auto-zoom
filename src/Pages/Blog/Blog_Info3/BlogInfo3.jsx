import styles from "../Blog_Info3/BlogInfo3.module.css"
import img from "../../../assets/blog3.jpg"
import Footer from "../../../Components/Footer/Footer"
import { t } from "i18next"

export const BlogInfo3 = () => {
  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.blog_info_container}>
        <a href="/" className={styles.link_to_home}>
            {t("Luxury Cars for Rent in Dubai")} /
            <span> {t("Blog")} /</span>
            <span> {t("Top 5 Reasons to Rent a Car Dubai")}</span>
        </a>
        <h2 className={styles.title}>{t("TOP 5 REASONS TO RENT A CAR DUBAI STYLE THIS SUMMER")}</h2>
        <p className={styles.text}>{t("Get as more as you")}</p>
        <p className={`${styles.text} ${styles.city_name}`}>{t("Burj Halifa")}</p>
        <img src={img} alt="car_photo" className={styles.img}/>
        <p className={styles.text}>{t("Late summer")}</p>
    </div>
    </div>

</>
  )
}
