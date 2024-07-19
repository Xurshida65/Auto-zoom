import styles from "../photoshoot/Photoshoot.module.css"
import img from "../../../assets/SportsCarRental.jpg"
import { TiInputCheckedOutline } from "react-icons/ti";

import { useTranslation } from "react-i18next";

export const Photoshoot = () => {

    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange

  return (
   <>
    <div className={styles.big_container}>
    <div className={styles.SportCarRentContainer}>
            <a href="/" className={styles.link_to_home}>
                {t("Luxury Cars for Rent in Dubai")} /
                <span> {t("Services")} / </span>
                <span>Sports Car Rental Dubai Style Tour in Dubai</span>
            </a>
            <h2 className={styles.title}>{t("Sports Car Rental Dubai Style Tour in Dubai")}</h2>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <img src={img} alt="sports car" className={styles.img}/>
                    <div className={styles.text_box}>
                        <h3 className={styles.title_text_box}>{t("basic")}</h3>
                        <div className={styles.sport_car_price}>
                            <span className={styles.span_box}>1000</span>
                            <span>{t("one person")}</span>
                        </div>
                        <p className={styles.sport_car_text}> {t("Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian")}<br />{t("hospitality.")}</p>
                        <h3 className={styles.package_inclusions}>{t("Package Inclusions:")}</h3>
                        <ul>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Dune Buggy riding 1.5 hours")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Cuadro 15 min")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Premium Transfer to camp")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Falcone shoting")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Camel")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("VIP room")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Fruits, Drinks, BBQ")}</li>
                        </ul>
                        <button className={styles.btn_booking}>{t("book now")}</button>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src={img} alt="sports car" className={styles.img}/>
                    <div className={styles.text_box}>
                        <h3 className={styles.title_text_box}>{t("basic")}</h3>
                        <div className={styles.sport_car_price}>
                            <span className={styles.span_box}>3000</span>
                            <span>{t("two person")}</span>
                        </div>
                        <p className={styles.sport_car_text}>{t("Embark on an exhilarating journey across the mesmerizing dunes of Dubai, where adventure meets luxury with unforgettable experiences and traditional Arabian.")}</p>
                        <h3 className={styles.package_inclusions}>{t("Package Inclusions:")}</h3>
                        <ul>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Premium Transfer to camp")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Dune Buggy riding 1.5 hours")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Cuadro 15 min")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Falcone shoting")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Camel")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("VIP room")}</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>{t("Fruits, Drinks, BBQ")}</li>
                        </ul>
                        <button className={styles.btn_booking}>{t("book now")}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
   </>
  )
}
