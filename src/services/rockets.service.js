import baseUrl from "../configs/urls";

const getAll = () => {
    return fetch(baseUrl).then(rockets => rockets.json());
};

export const rocketsService = {
    getAll
}