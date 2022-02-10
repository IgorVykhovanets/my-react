import {axiosService} from "./axios.service";
import {urls, apiKey} from "../configs/urls";

export const genresService = {
    getAll: () => axiosService.get(`${urls.genres}?${apiKey}`).then(genres => genres.data),
    getMoviesGenre: (id, currentPage) => axiosService.get(`${urls.movies}?${apiKey}&with_genres=${id}&page=${currentPage}`).then(movies => movies.data)
}