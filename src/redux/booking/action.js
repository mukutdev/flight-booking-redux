import { BOOKNOW } from "./actionType"

export const booking = formData =>{
    return {
        type : BOOKNOW,
        payload : formData
    }
} 