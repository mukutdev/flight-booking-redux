import { BOOKNOW } from "./actionType";


const initialState = {}

const createActionReducer = (state = initialState , action)=>{

    switch (action.type) {
        case BOOKNOW:
            return {
                ...state,
                data : action.payload
            }
    
        default:
            return state;
    }


}

export default createActionReducer;