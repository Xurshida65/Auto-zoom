import axios from "axios";

export const base_url = "https://realauto.limsa.uz/api"
export const getCars = async() => {
    try {
        const res = await axios.get(`${base_url}/cars`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}
export const getBrands = async() => {
    try {
        const res = await axios.get(`${base_url}/brands`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}
export const getModels = async() => {
    try {
        const res = await axios.get(`${base_url}/models`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}
export const getCategories = async() => {
    try {
        const res = await axios.get(`${base_url}/categories`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}
export const getLocations = async() => {
    try {
        const res = await axios.get(`${base_url}/locations`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}
export const getCities = async() => {
    try {
        const res = await axios.get(`${base_url}/cities`)
        return res?.data
    } catch (error) {
        console.log(error);
    }
}