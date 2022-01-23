import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

const selectSelf = (state: AppStateType) => state

export const getStateCards = (state: AppStateType) => {
	return state.cards.cards;
}

export const getStateCardDetail = createSelector(selectSelf, getStateCards, (state, items) => {
    let item = items.filter((item) => {
		return item.id === state.cards.detail;
	})[0];

    if (!item) {
        item = items[0];
    }

	return item;
});
