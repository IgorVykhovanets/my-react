import {JsonAxiosService} from "./json.axios.service";
import {urlsJSON} from "../configs/urlsJSONPlaceHolder";

export const commentsService = {
    getAll: () => JsonAxiosService.get(urlsJSON.comments).then(comments => comments.data)
}