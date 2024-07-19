import { Link } from "react-router-dom"
import styles from "../YoutubeVideo/YoutubeVideo.module.css"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";

export const YoutubeVideo = () => {

    const scrolltoTop = () => {
        window.scrollTo(0, 0)
      }

      const { t, i18n } = useTranslation();

      const handleChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
      };
      handleChange
    

    return (
        <div className={styles.big_container}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <iframe className={styles.video}
                        src="https://www.youtube.com/embed/6Bcg46rxqAE?si=oUOIn81REX0sL4RT&start=2"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.title}>{t("SPORTS CAR RENTAL DUBAI")}</h2>
                    <p className={styles.text}>{t("Autozoom")}</p>
                    <Link className={styles.link} onClick={scrolltoTop} to="/cars">{t("ALL CARS")} <IoMdArrowDroprightCircle className={styles.icon}/></Link>
                </div>
            </div>
        </div>
    )
}
