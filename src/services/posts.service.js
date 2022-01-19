import baseUrl, {urls} from "../configs/urls";

const getAll = () => {
    return fetch(baseUrl+urls.posts).then(posts => posts.json());
};

export const postsServices = {
    getAll
}