import axios from "axios";

const baseURL = "https://timer-form-backend.onrender.com";

const publicAxios = axios.create({ baseURL });

export {publicAxios};