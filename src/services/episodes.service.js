import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const episodesService = {
    episodesPage1: () => axiosService.get(`${urls.episode}/[1,2,3,4,5,6,7,8,9,10]`).then(episodes => episodes.data),
    episodesPage2: () => axiosService.get(`${urls.episode}/[11,12,13,14,15,16,17,18,19,20]`).then(episodes => episodes.data),
    detailsEpisodePage: (id) => axiosService.get(`${urls.episode}/${id}`).then(episode => episode.data)
}