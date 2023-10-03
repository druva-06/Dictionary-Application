import { ADD_DATA, GET_DATA } from "./actionTypes"

export const addData = (word) => {
    return {
        type: ADD_DATA,
        word: word
    }
}

export const getData = () => {
    return {
        type: GET_DATA
    }
}