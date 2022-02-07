import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

const selectSelf = (state: AppStateType) => state

export const getStateTasks = (state: AppStateType) => {
	return state.tasks.tasks;
}

export const getStateFilter = (state: AppStateType) => {
    return state.tasks.filter;
}

export const getStateTaskDetail = createSelector(selectSelf, getStateTasks, (state, items) => {
    let item = items.filter((item) => {
		return item.id === state.tasks.detail;
	})[0];

    if (!item) {
        item = items[0];
    }
	return item;
});

export const getIsLoad = (state: AppStateType) => {
    return state.tasks.isLoad;
}

export const getIsResponceSuccess = (state: AppStateType) => {
    return state.tasks.isResponceSuccess;
}

export const getResponceErrorCode = (state: AppStateType) => {
    return state.tasks.responceErrorCode;
}