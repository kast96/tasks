import image1 from "../assets/images/1.jpg";
import { CardType } from "../types/types";

const SET_DETAIL_CARD = 'cards/cards/SET-DETAIL-CARD';
const SET_DONE = 'cards/cards/SET-DONE';

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
            let cards: Array<CardType> = [...state.cards].map(item => {
                let newItem = {...item};
                if (newItem.id === action.id) {
                    newItem.done = action.done;
                }
                return newItem;
            });
            
            return {
                ...state,
                cards
            };

        default:
            return state;
    }
}

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

export default cardsReducer;