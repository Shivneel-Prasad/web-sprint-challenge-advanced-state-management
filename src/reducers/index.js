import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR, FETCH_ADD_NEW_SMURF, FETCH_ERROR_MESSAGE } from './../actions'

export const initialState = {
    smurfsArray: [],
    isLoading: false,
    error: "ERROR ALERT!!"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state, 
                isLoading: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                error: action.payload
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Something went wrong!' + action.payload
            }
        case FETCH_ADD_NEW_SMURF:
            return {
                ...state,
                smurfsArray: [
                    ...state.smurfsArray, 
                    action.payload
                ],
                isLoading: false
            }
        case FETCH_ERROR_MESSAGE:
            return {
                ...state,
                isLoading: false,
                error: 'Unable to find it. please try again'
            }
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.