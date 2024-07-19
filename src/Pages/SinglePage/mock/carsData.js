import { BsWhatsapp } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";

const carsData = [
  {
    component: BsWhatsapp,
    style: "#5AEC5A",
    getInTouch: "https://wa.me/971558462124",
  },
  {
    component: BiLogoTelegram,
    style: "#2374F8",
    getInTouch: "https://t.me/+971558462124",
  },
  {
    component: LuPhone,
    style: "#FFB630",
    getInTouch: "tel:+971558462124",
  },
];

const formInputs = [
  {
    type: "text",
    placeholder: "Name",
    classname: "inputName",
    required: true,
  },
  {
    type: "text",
    classname: "inputName",
    placeholder: "Phone",
    required: true,
  },
  {
    type: "text",
    placeholder: "Period",
    classname: "inputName",
    required: false,
  },
  {
    type: "text",
    placeholder: "Details",
    classname: "inputName",
    required: false,
  },
];
export { carsData, formInputs} ;
