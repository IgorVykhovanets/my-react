import axios from "axios";

import {baseURLJson} from "../configs/urlsJSONPlaceHolder";

export const JsonAxiosService = axios.create({
    baseURL: baseURLJson
})