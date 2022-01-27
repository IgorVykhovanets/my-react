import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const usersService = {
    getAll: () => axiosService.get(urls.users).then(users => users.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(user => user.data),
    getByPostId: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(posts => posts.data),
    getByIdAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(albums => albums.data)
}