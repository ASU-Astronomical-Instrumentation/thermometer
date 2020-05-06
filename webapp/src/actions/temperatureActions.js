import { SET_TEMPERATURE } from './actionTypes'; 

export function setTemperature(newTemperature) {
    return {
        type: SET_TEMPERATURE, 
        newTemperature
    }
}