import { SET_TEMPERATURE } from '../actions/actionTypes';

const initialState = {
    temperatureDisplay: {
        temperature: "#.##"
    }
}

function temperatureReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TEMPERATURE:
            return {
                ...state,
                temperatureDisplay: {
                    ...state.temperatureDisplay,
                    temperature: action.newTemperature
                }
            }
        default:
            return state
    }
}

export default temperatureReducer;
