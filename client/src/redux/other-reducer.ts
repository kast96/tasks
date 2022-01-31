let initialState = {
}

type InitialStateType = typeof initialState;

const otherReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default otherReducer;