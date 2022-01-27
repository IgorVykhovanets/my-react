import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(posts => posts.data),
    getByIdComments: (id) => axiosService.get(`${urls.posts}/${id}/${urls.comments}`).then(comments => comments.data)
}