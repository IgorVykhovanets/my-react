import {axiosService} from "./axios.service";
import {keyApi, urls} from "../configs/urls";

export const genresService = {
    getAll: () => axiosService.get(`${urls.genres}?${keyApi}`).then(genres => genres.data)
}