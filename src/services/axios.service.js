import axios from "axios";

import baserUrl from "../configs/urls";

export const axiosService = axios.create({
    baseURL: baserUrl
});