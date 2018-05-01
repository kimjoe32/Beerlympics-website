/*
    Define actions here
    ex: import { SOME_ACTION } from './types';
    
    Good place to make API calls to server
    ex:
    export const someAction = () => async dispatch => {
    const res = await axios.get('/api/some_api_call');
    dispatch({
        type: SOME_ACTION,
        payload: res.data
    });
}
*/
import { GET_TEAM_DATA } from './types';
import Axios from 'axios';

export const getTeamData = () => async dispatch => {
    const res = await Axios.get("/api/getTeamData");
    dispatch({
        type: GET_TEAM_DATA,
        payload: res
    });
}