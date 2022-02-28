import axios from "axios";
import { TaskType } from "../types/types";

const baseURL = 'http://192.168.0.100:3000/'

const instance = axios.create({
    baseURL: baseURL,
});
instance.defaults.timeout = 3000;

export const tasksAPI = {
    getTasks() {
        return instance.get<Array<TaskType>>(`tasks/`).then(response => {
            response.data.map(item => {
                item.image = (baseURL.substring(0, baseURL.length - 1) + item.image)
                return item
            })
            
            return response.data
        }).catch(reason => {
            return reason.code
        });
    },
}