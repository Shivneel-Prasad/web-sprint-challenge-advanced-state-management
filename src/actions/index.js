import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_ERROR = 'FETCH_SMURF_ERROR'
export const FETCH_ADD_NEW_SMURF = 'FETCH_ADD_NEW_SMURF'
export const FETCH_ERROR_MESSAGE = 'FETCH_ERROR_MESSAGE'

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => (dispatch) => {
    dispatch({ type: FETCH_SMURF_START })
    axios.get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_ERROR, payload: err.response.data })
        })
}

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addNewSmurf = (newSmurfs) => (dispatch) => {
    axios.post(`http://localhost:3333/smurfs`, newSmurfs)
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_ERROR, payload: err.response.data })
        })
}

//3. Add a standard action that allows us to set the value of the error message slice of state.

export const errorUpdate = () => (dispatch) => {
    dispatch({ type: FETCH_ERROR_MESSAGE });
}