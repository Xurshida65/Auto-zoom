
import { base_url } from '../../getData/getData'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "./CarsFilter.css"
import { Link } from 'react-router-dom';
const CarsCard = ({item}) => {
  return (
    <div className='cars__card'>
      <Link to={`/carsdetails/${item?.id}`} className='cars__link'></Link>
      <img src={`${base_url}/uploads/images/${item?.car_images[0].image?.src}`} alt={item?.brand?.title} />
      <h2 className='cars__card-title'>{item?.brand?.title} {item?.model?.name}</h2>
      <p className='cars__card-price'>AED{item?.price_in_aed}<span>/ $ {item?.price_in_usd}</span></p>
      <span>per day</span>
      <div className='cars__card-links'>
        <a href="https://wa.me/971558462124" target='blank' className='whatsapp'><FaWhatsapp/> <span>WhatsApp</span></a>
        <a href="https://t.me/+971558462124" target='blank' className='telegram'><FaTelegram/><span>Telegram</span></a>
      </div>
    </div>
  )
}

export default CarsCard
