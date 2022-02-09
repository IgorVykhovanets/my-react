import {axiosService} from "./axios.service";
import {keyApi, urls} from "../configs/urls";

export const moviesService = {
    getAll: () => axiosService.get(`${urls.movies}?${keyApi}`).then(films => films.data)
};