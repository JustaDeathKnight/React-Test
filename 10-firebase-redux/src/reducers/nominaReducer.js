export const nominaReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'ADD_NOMINA':
            return [...state, action.payload];
        case 'REMOVE_NOMINA':
            return state.filter(nomina => nomina.id !== action.payload);
        case 'EDIT_NOMINA':
            return state.map(nomina => {            
                if (nomina.id === action.payload.id) {
                    return action.payload;
                } else {
                    return nomina;
                }
            }
            );  
        default:
            return state;
    }
}