import baseUrl, {urls} from "../configs/urls";

const getAll = () => {
   return  fetch(baseUrl+urls.comments).then(comments => comments.json());
};

export const commentsService = {
   getAll
}