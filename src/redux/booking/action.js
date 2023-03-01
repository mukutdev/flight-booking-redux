import { BOOKNOW } from "./actionType"

export const booking = formData =>{
    return {
        action : BOOKNOW,
        payload : formData
    }
} 