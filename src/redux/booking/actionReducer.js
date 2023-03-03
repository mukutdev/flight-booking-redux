import { BOOKNOW, DELETEBOOKING } from "./actionType";


const initialState = []

const nextBookingId = bookings =>{
    const maxId = bookings.reduce((maxId , booking) => Math.max(booking.id , maxId) , -1)
    return maxId + 1
}

const createActionReducer = (state = initialState , action)=>{
    switch (action.type) {
        case BOOKNOW:
            if(state.length >= 3){
                return state;
            }
            return [
                ...state,
                {id : nextBookingId(state) , ...action.payload}
            ]
        case DELETEBOOKING:
            return state.filter(booking => booking.id !== action.payload)   
        default:
            return state;
    }


}

export default createActionReducer;