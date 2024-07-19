import styles from "../Blog/Blog.module.css"
import img1 from "../../assets/blog1.jpg"
import img2 from "../../assets/blog2.jpg"
import img3 from "../../assets/blog3.jpg"
import { Link } from "react-router-dom"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Footer from "../../Components/Footer/Footer"
import { useTranslation } from "react-i18next"

const Blog = () => {

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
    <div className={styles.blog_container}>
    <a href="/" className={styles.link_to_home}>
        {t("Luxury Cars for Rent in Dubai")} /
        <span> {t("Blog")}</span>
      </a>
      <h2 className={styles.title}>{t("Blog")}</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img1} alt="car" className={styles.img}/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title_right}>{t("Top 3 Destinations to Visit in Dubai in a Rental Car")}</h2>
            <p className={styles.text_right}>{t("One of")}</p>
            <div className={styles.display}>
            <p className={styles.date}>25 Seb 2022</p>
            <Link onClick={scrolltoTop} to="/blog_info1"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img2} alt="car" className={styles.img}/>
          </div>
         <div className={styles.right}>
            <h2 className={styles.title_right}>{t("Top 5 wonderful spots for a car photo session in Dubai")}</h2>
            <p className={styles.text_right}>{t("There are")}</p>
            <div className={styles.display}>
            <p className={styles.date}>11 Feb 2022</p>
            <Link onClick={scrolltoTop} to="/blog_info2"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img3} alt="car" className={styles.img}/>
          </div>
         <div className={styles.right}>
            <h2 className={styles.title_right}>{t("Top 5 Reasons to Rent a Car Dubai Style this Summer")}</h2>
            <p className={styles.text_right}>{t("Summer")}</p>
            <div className={styles.display}>
            <p className={styles.date}>31 Jul 2022</p>
            <Link onClick={scrolltoTop} to="/blog_info3"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog