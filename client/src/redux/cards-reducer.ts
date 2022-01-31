import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardType } from "../types/types";
import { tasksAPI } from '../api/api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const SET_DETAIL_CARD = 'cards/cards/SET-DETAIL-CARD';
const SET_DONE = 'cards/cards/SET-DONE';
const SAVE_STORAGE = 'cards/cards/SAVE-STORAGE';
const LOAD_STORAGE = 'cards/cards/LOAD-STORAGE';
const SET_FILTER = 'cards/cards/SET-FILTER';
const SET_CARDS = 'cards/cards/SET-CARDS';
const TOGGLE_IS_LOAD = 'cards/cards/TOGGLE-IS-LOAD';

let initialState = {
    isLoad: true,
    cards: [] as Array<CardType>,
    detail: 0,
    filter: null as string | null
}

type InitialStateType = typeof initialState;

const cardsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_DETAIL_CARD:
            return {
                ...state,
                detail: action.detail,
            };

        case SET_DONE:
            let cardsSetDone: Array<CardType> = [...state.cards].map(item => {
                let newItem = {...item};
                if (newItem.id === action.id) {
                    newItem.done = action.done;
                }
                return newItem;
            });
            
            return {
                ...state,
                cards: cardsSetDone
            };

        case SAVE_STORAGE:
            const items: Array<number> = state.cards.filter(item => item.done === true).map(item => item.id)
            storeData('doneID', JSON.stringify(items));
            
            return state;
            
        case LOAD_STORAGE:
            let cardsLoadStorage: Array<CardType> = [...state.cards].map(item => {
                let newItem = {...item};
                
                if (action.ids.includes(newItem.id)) {
                    newItem.done = true;
                }
                return newItem;
            });

            return {
                ...state,
                cards: cardsLoadStorage
            };

        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        
        case SET_CARDS:
            return {
                ...state,
                cards: action.cards
            }

        case TOGGLE_IS_LOAD:
            return {
                ...state,
                isLoad: action.isLoad
            }

        default:
            return state;
    }
}

type ActionTypes = SetDetailActionType | SetDoneActionType | SaveStorageActionType | LoadStorageActionType | SetFilterActionType | SetCardsActionType | ToggleIsLoadType

export const storeData = async (key: string, value: string): Promise<void | false> => {
    try {
        await AsyncStorage.setItem(`@CardStore:${key}`, value);
    } catch (error) {
        console.error('Save Failed');
        return false;
    }
};

export const retrieveData = async (key: string): Promise<string | false> => {
    try {
      return await AsyncStorage.getItem(`@CardStore:${key}`);
    } catch (error) {
        console.error('Load Failed');
        return false;
    }
};

type SetDetailActionType = {
    type: typeof SET_DETAIL_CARD
    detail: number
}

export const setDetailActionCreator = (detail: number): SetDetailActionType => {
	return {type: SET_DETAIL_CARD, detail}
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

type SetCardsActionType = {
    type: typeof SET_CARDS
    cards: Array<CardType>
}

const setCards = (cards: Array<CardType>): SetCardsActionType => {
    return {type: SET_CARDS, cards}
}

type ToggleIsLoadType = {
    type: typeof TOGGLE_IS_LOAD
    isLoad: boolean
}

const toggleIsLoad = (isLoad: boolean): ToggleIsLoadType => {
    return {type: TOGGLE_IS_LOAD, isLoad}
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const getTasks = (): ThunkType => {
	return async (dispatch) => {
		dispatch(toggleIsLoad(true));
		let response = await tasksAPI.getTasks();
		dispatch(toggleIsLoad(false));
		dispatch(setCards(response));
	}
}

export default cardsReducer;