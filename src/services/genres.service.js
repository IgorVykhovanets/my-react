import {axiosService} from "./axios.service";
import {urls, apiKey} from "../configs/urls";

export const genresService = {
    getAll: () => axiosService.get(`${urls.genres}?${apiKey}`).then(genres => genres.data),
    getAllMoviesGenresPage: (id, currentPage) => axiosService.get(`${urls.genres}?${apiKey}&page=${currentPage}&with_genres=${id}`).then(movies => movies.data)
}