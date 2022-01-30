import axios from "axios";
import { CardType } from "../types/types";

const baseURL = 'http://192.168.0.100:3000/'

const instance = axios.create({
    baseURL: baseURL,
});

export const tasksAPI = {
    getTasks() {
        return instance.get<Array<CardType>>(`tasks/`).then(response => {
            response.data.map(item => {
                item.image = (baseURL + item.image).replace(/\/\//g, "/")
                return item
            })
            return response.data
        });
    },
}