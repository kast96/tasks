import image1 from "../assets/images/1.jpg";
import { CardType } from "../types/types";

const SET_DETAIL_CARD = 'cards/cards/SET-DETAIL-CARD';

let initialState = {
    cards: [
        {id: 1, name: 'Card 1', image: image1},
        {id: 2, name: 'Card 2', image: image1},
        {id: 3, name: 'Card 3', image: image1},
        {id: 4, name: 'Card 4', image: image1}
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

export default cardsReducer;