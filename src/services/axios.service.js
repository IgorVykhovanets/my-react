import axios from "axios";

import baseURL from "../configs/urlsCars";

export const axiosService = axios.create({baseURL})
