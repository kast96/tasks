import AsyncStorage from '@react-native-async-storage/async-storage';
import image1 from "../assets/images/1.jpg";
import { CardType } from "../types/types";

const SET_DETAIL_CARD = 'cards/cards/SET-DETAIL-CARD';
const SET_DONE = 'cards/cards/SET-DONE';
const SAVE_STORAGE = 'cards/cards/SAVE-STORAGE';
const LOAD_STORAGE = 'cards/cards/LOAD-STORAGE';

let initialState = {
    cards: [
        {id: 1, image: image1, name: 'Card 1', description: 'Description 1', done: false},
        {id: 2, image: image1, name: 'Card 2', description: 'Description 2'},
        {id: 3, name: 'Card 3'}
    ] as Array<CardType>,
    detail: 0
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

        default:
            return state;
    }
}

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

export default cardsReducer;