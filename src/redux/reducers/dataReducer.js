import { ADD_DATA } from "../actions/actionTypes";

const initialState = []

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return [...state, action.word];
        default:
            return state;
    }
}

export default dataReducer