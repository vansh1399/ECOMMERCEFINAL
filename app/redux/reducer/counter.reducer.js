import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "../action/ActionTypes"

const initialState = {
    count: 0
}

export const counteReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTCOUNTER:
            return {
                count: state.count + 1
            }
        case DECREMENTCOUNTER:
            return {
                count: state.count - 1
            }

        default: {
            return state
        }
    }
}