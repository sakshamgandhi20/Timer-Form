import axios from "axios";

const baseURL = "http://localhost:2002";

const publicAxios = axios.create({ baseURL });

export {publicAxios};