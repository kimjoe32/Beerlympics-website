import { GET_TEAM_DATA, 
    SEND_NEW_TEAM_DATA, 
    GET_EVENTS, 
    SELECT_EVENT,
    START_GAME } from './types';
import Axios from 'axios';

export const getTeamData = () => async dispatch => {
    const res = await Axios.get("/api/getTeamData");
    dispatch({
        type: GET_TEAM_DATA,
        payload: res
    });
}

export const sendNewTeamData = (teamData) => async dispatch => {
    const res = await Axios.post("/api/addNewTeam", teamData);
    dispatch({
        type:SEND_NEW_TEAM_DATA,
        payload: res
    });
}

export const getEvents = () => async dispatch => {
    const res = await Axios.get("/api/getEvents");
    dispatch({
        type: GET_EVENTS,
        payload: res
    });
}

export const selectEvent = (event) => {
    return {
        type:SELECT_EVENT,
        payload: event
    };
}

export const startGame = () => async dispatch => {
    const res = await Axios.get("/api/startGame");
    console.log('startGame', res);
    dispatch({
        type:START_GAME,
        payload:res
    });
}

export const asyncValCountryName = (values, dispatch)=>  {
    //returns if country name is available
    const { country } = values;
    console.log(country);
    const response = Axios.post('/api/isCountryAvail', {country});
    return response.then(response => {
        console.log(response);
        if (!response.data) {
            return new Promise( {country: 'Country is taken'});
        }        
    });
}