import { useEffect, useState } from "react";
import { base_url, getBrands, getCars, getCategories, getModels } from "../../getData/getData";
import "./CarsFilter.css";
import CarsCard from "./CarsCard";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const CarsFilter = ({ cars, setCars }) => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  
  useEffect(() => { 
    getData();
    if (cars?.length === 0) {
      setNotFound(true);
    }
  }, []);
  
  const getData = async () => {
    const cars = await getCars();
    const brands = await getBrands();
    setBrands(brands?.data);
    setCars(cars?.data);
    const models = await getModels();
    setModels(models?.data);
    const categories = await getCategories();
    setCategories(categories?.data);
  };

  const [offers, setOffers] = useState([
    { id: 1, text: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", value: "three_days_price=5000" },
    { id: 2, text: "3 DAYS RENT = 1300 AED🔥 ()", value: "three_days_price=1300" },
    { id: 3, text: "3 DAYS RENT = 1800 AED🔥", value: "three_days_price=1800" },
    { id: 4, text: "NO DEPOSIT", value: "no_deposit=1300" },
    { id: 5, text: "5000 AED🔥 ALL INCLUSIVE", value: "three_days_price=5000" },
    { id: 6, text: "2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", value: "all_inclusive=0" },
    { id: 7, text: "Rent Ferrari Dubai", value: "rent_ferrari=1800" },
    { id: 8, text: "4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE", value: "four_days_price=5000" },
  ]);

  const [activeModel, setActiveModel] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [sidebarVisible, setSideBarVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleModels = (e) => {
    setActiveModel(e.target.value);
  };

  const PreventDefault = (e) => {
    e.preventDefault();
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const queryParams = selectedOptions.map(option => option).join('&');

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory(selectedCategory.filter((option) => option !== value));
    }
  };

  const queryCategory = selectedCategory.map(option => `category_id=${option}`).join('&');

  const handleBrandsChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((option) => option !== value));
    }
  };

  const queryBrands = selectedBrands.map(option => `brands_id=${option}`).join('&');

  const navigate = useNavigate();

  const applyFilter = () => {
    axios.get(`${base_url}/cars?${queryParams}&${queryBrands}&${queryCategory}&model_id=${activeModel}`).then(res => {
      setCars(res?.data?.data);
      console.log(res?.data?.data);
      if (res?.data?.data.length === 0) {
        setNotFound(true)
      }
    });
    navigate("/cars");
  };

  const resetAll = () => {
    localStorage.removeItem("brands");
    getData();
    navigate("/cars");
  };
  
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  handleChange

  return (
    <div className="cars__filter">
      <button
        onClick={() => setSideBarVisible(!sidebarVisible)}
        className={sidebarVisible ? "close__cars-sidebar" : "none"}
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={() => setSideBarVisible(!sidebarVisible)}
        className={sidebarVisible ? "none" : "cars__filter-visible"}
      >
        <GiSettingsKnobs className="settings__icon" />
      </button>
      <aside className={sidebarVisible ? "block " : "cars__sidebar"}>
        <h2 className="cars__sidebar-title">{t("Filter by")}</h2>
        <h3 className="cars__sidebar-title2">{t("Offers")}</h3>
        <form onSubmit={PreventDefault}>
          <div className="cars__sidebar-filter">
            {offers?.map((item, index) => {
              return (
                <div key={index}>
                  <input type="checkbox" id={item?.id} value={item?.value} onChange={handleCheckboxChange} />
                  <label htmlFor={item?.id}>{item?.text}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>{t("Car type")}</h2>
            {categories?.map((item, index) => {
              return (
                <div key={index}>
                  <input type="checkbox" id={item?.id} value={item?.id} onChange={handleCategoryChange} />
                  <label htmlFor={item?.id}>{item?.name_en}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>{t("Brands")}</h2>
            {brands?.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    value={item?.id}
                    onChange={handleBrandsChange}
                  />
                  <label htmlFor={item?.id}>{item?.title}</label>
                </div>
              );
            })}
          </div>
          <div className="cars__sidebar-filter">
            <h2>{t("Models")}</h2>
            <select onChange={handleModels}>
              <option value="" hidden>{t("Select Model")}</option>
              {models?.filter(item => selectedBrands?.includes(item?.brand_id))?.map((item, index) => {
                return (
                  <option value={item?.id} key={index}>
                    {item?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="cars__sidebar-buttons">
            <button className="cars__sidebar-reset" type="reset" onClick={resetAll}>{t("Reset")}</button>
            <button className="cars__sidebar-filter-btn" onClick={applyFilter}>
              {t("Apply Filter")}
            </button>
          </div>
        </form>
      </aside>
      <div className="cars__right">
        <h1 className="cars__right-title">
          {t("Luxury Cars for Rent in Dubai / Hire the latest super car")}
        </h1>
        <div className="cars__cards">
          {cars?.length > 0 ? cars?.map((item, index) => {
            return <CarsCard key={index} item={item} />;
          }) : <h3>{notFound ? "Not found" : "Loading..."}</h3>}
        </div>
      </div>
    </div>
  );
};

export default CarsFilter;
