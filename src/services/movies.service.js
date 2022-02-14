import {axiosService} from "./axios.service";
import {urls, apiKey} from "../configs/urls";

export const moviesService = {
    getAllCurrentPage: (currentPage) => axiosService.get(`${urls.movies}?${apiKey}&page=${currentPage}`).then(movies => movies.data),
    getById: (id) => axiosService.get(`${urls.detailsMovies}/${id}?${apiKey}`).then(movie => movie.data),
    getMovieBySearch: (data) => axiosService.get(`${urls.search}?${apiKey}&query=${data}`).then(movie => movie.data)
}