import {JsonAxiosService} from "./json.axios.service";
import {urlsJSON} from "../configs/urlsJSONPlaceHolder";

export const postsService = {
    getAll: () => JsonAxiosService.get(urlsJSON.posts).then(posts => posts.data)
}