import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getPhotoById: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(photos => photos.data)
}