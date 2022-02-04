import {axiosService} from "./axios.service";
import {urlsCars} from "../configs/urlsCars";

export const carsService = {
    getAll: () => axiosService.get(urlsCars.cars).then(cars => cars.data),
    addCar: (car) => axiosService.post(urlsCars.cars, car).then(car => car.data),
    deleteCar: (id) => axiosService.delete(`${urlsCars.cars}/${id}`)
}