import { types } from "../types/types";

export const nominaReducer = (state = [], action) => {
    
    switch (action.type) {
        case types.nominaAdd:
            return [...state, action.payload];
         
        default:
            return state;
    }
}