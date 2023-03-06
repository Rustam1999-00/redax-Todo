import { TODO_ADD, TODO_DEFAULT, TODO_EDI } from "./todoTypes"


const initialState = []


export const todoReduser = (state = initialState, action) => {
    switch (action.type) {
        case TODO_EDI:
            return [
                ...state,
                action.payload,
            ];
        case TODO_DEFAULT:
            return [...action.payload];
        case TODO_ADD:
            return [...action.payload]


        default:
            return state;
    }

}