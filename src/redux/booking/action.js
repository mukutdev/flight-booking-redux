import { BOOKNOW, DELETEBOOKING } from "./actionType"

export const booking = formData =>{
    return {
        type : BOOKNOW,
        payload : formData
    }
} 
export const deleteBooking = id =>{
    return{
        type : DELETEBOOKING,
        payload : id
    }
}