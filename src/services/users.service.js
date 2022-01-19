import baseUrl, {urls} from "../configs/urls";

const getAll = () => {
   return  fetch(baseUrl+urls.users).then(users => users.json());
};

export const userServices = {
   getAll
}
