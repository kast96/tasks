import AsyncStorage from '@react-native-async-storage/async-storage';
import { TaskType } from "../types/types";
import { tasksAPI } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SET_DETAIL_TASK = 'tasks/tasks/SET-DETAIL-TASK';
const SET_DONE = 'tasks/tasks/SET-DONE';
const SAVE_STORAGE = 'tasks/tasks/SAVE-STORAGE';
const LOAD_STORAGE = 'tasks/tasks/LOAD-STORAGE';
const SET_FILTER = 'tasks/tasks/SET-FILTER';
const SET_TASKS = 'tasks/tasks/SET-TASKS';
const TOGGLE_IS_LOAD = 'tasks/tasks/TOGGLE-IS-LOAD';
const TOGGLE_IS_RESPONCE_SUCCESS = 'tasks/tasks/TOGGLE-IS-RESPONCE-SUCCESS';

let initialState = {
    isLoad: true,
    tasks: [] as Array<TaskType>,
    detail: 0,
    filter: null as string | null,
    isResponceSuccess: false,
    responceErrorCode: '',
}

type InitialStateType = typeof initialState;

const tasksReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_DETAIL_TASK:
            return {
                ...state,
                detail: action.detail,
            };

        case SET_DONE:
            let tasksSetDone: Array<TaskType> = [...state.tasks].map(item => {
                let newItem = {...item};
                if (newItem.id === action.id) {
                    newItem.done = action.done;
                }
                return newItem;
            });
            
            return {
                ...state,
                tasks: tasksSetDone
            };

        case SAVE_STORAGE:
            const items: Array<number> = state.tasks.filter(item => item.done === true).map(item => item.id)
            storeData('doneID', JSON.stringify(items));
            
            return state;
            
        case LOAD_STORAGE:
            let tasksLoadStorage: Array<TaskType> = [...state.tasks].map(item => {
                let newItem = {...item};
                
                if (action.ids.includes(newItem.id)) {
                    newItem.done = true;
                }
                return newItem;
            });

            return {
                ...state,
                tasks: tasksLoadStorage
            };

        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }

        case TOGGLE_IS_LOAD:
            return {
                ...state,
                isLoad: action.isLoad
            }

        case TOGGLE_IS_RESPONCE_SUCCESS:
            return {
                ...state,
                isResponceSuccess: action.isResponceSuccess,
                responceErrorCode: action.responceErrorCode || ''
            }

        default:
            return state;
    }
}

type ActionTypes = SetDetailActionType | SetDoneActionType | SaveStorageActionType | LoadStorageActionType | SetFilterActionType | SetTasksActionType | ToggleIsLoadType | ToggleIsResponceSuccessType

export const storeData = async (key: string, value: string): Promise<void | false> => {
    try {
        await AsyncStorage.setItem(`@TaskStore:${key}`, value);
    } catch (error) {
        console.error('Save Failed');
        return false;
    }
};

export const retrieveData = async (key: string): Promise<string | false> => {
    try {
      return await AsyncStorage.getItem(`@TaskStore:${key}`);
    } catch (error) {
        console.error('Load Failed');
        return false;
    }
};

type SetDetailActionType = {
    type: typeof SET_DETAIL_TASK
    detail: number
}

export const setDetailActionCreator = (detail: number): SetDetailActionType => {
	return {type: SET_DETAIL_TASK, detail}
}

type SetDoneActionType = {
    type: typeof SET_DONE
    id: number
    done: boolean
}

export const setDoneActionCreator = (id: number, done: boolean): SetDoneActionType => {
	return {type: SET_DONE, id, done}
}

type SaveStorageActionType = {
    type: typeof SAVE_STORAGE
}

export const saveStorageActionCreator = (): SaveStorageActionType => {
    return {type: SAVE_STORAGE}
}

type LoadStorageActionType = {
    type: typeof LOAD_STORAGE
    ids: Array<number>
}

export const loadStorageActionCreator = (ids: Array<number>): LoadStorageActionType => {   
    return {type: LOAD_STORAGE, ids}
}

type SetFilterActionType = {
    type: typeof SET_FILTER
    filter: string | null
}

export const setFilterActionCreator = (filter: string | null): SetFilterActionType => {
    return {type: SET_FILTER, filter}
}

type SetTasksActionType = {
    type: typeof SET_TASKS
    tasks: Array<TaskType>
}

const setTasks = (tasks: Array<TaskType>): SetTasksActionType => {
    return {type: SET_TASKS, tasks}
}

type ToggleIsLoadType = {
    type: typeof TOGGLE_IS_LOAD
    isLoad: boolean
}

const toggleIsLoad = (isLoad: boolean): ToggleIsLoadType => {
    return {type: TOGGLE_IS_LOAD, isLoad}
}

type ToggleIsResponceSuccessType = {
    type: typeof TOGGLE_IS_RESPONCE_SUCCESS
    isResponceSuccess: boolean
    responceErrorCode?: string
}

const toggleIsResponceSuccess = (isResponceSuccess: boolean, responceErrorCode = ''): ToggleIsResponceSuccessType => {
    return {type: TOGGLE_IS_RESPONCE_SUCCESS, isResponceSuccess, responceErrorCode}
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getTasks = (): ThunkType => {
	return async (dispatch) => {
        dispatch(toggleIsLoad(true));
		let response = await tasksAPI.getTasks();
        dispatch(toggleIsLoad(false));
        if (typeof response == 'object') {
            dispatch(setTasks(response));
            dispatch(toggleIsResponceSuccess(true));
        } else {
            dispatch(toggleIsResponceSuccess(false, response));
        }
	}
}

export default tasksReducer;