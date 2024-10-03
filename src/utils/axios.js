import axios from "axios";

const BASE_URL = "https://bronze-chip-objective.glitch.me";

export const  axiosInstance = axios.create({baseURL: BASE_URL})
