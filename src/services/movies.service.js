import {axiosService} from "./axios.service";
import {urls, apiKey} from "../configs/urls";

export const moviesService = {
    getAll: () => axiosService.get(`${urls.movies}?${apiKey}`).then(movies => movies.data),
    getById: (id) => axiosService.get(`${urls.detailsMovies}/${id}?${apiKey}`).then(movie => movie.data)
}