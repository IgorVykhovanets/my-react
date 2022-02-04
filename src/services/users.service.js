import {JsonAxiosService} from "./json.axios.service";
import {urlsJSON} from "../configs/urlsJSONPlaceHolder";

export const usersService = {
    getAll: () => JsonAxiosService.get(urlsJSON.users).then(users => users.data)
}