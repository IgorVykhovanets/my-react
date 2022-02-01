import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodesService = {
    getAll: (page) => axiosService.get(`${urls.episode}?page=${page}`).then(episodes => episodes.data),
    getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(episode => episode.data)
}