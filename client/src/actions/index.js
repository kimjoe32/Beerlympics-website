import { GET_TEAM_DATA, SEND_NEW_TEAM_DATA, GET_EVENTS, SELECT_EVENT } from './types';
import Axios from 'axios';

export const getTeamData = () => async dispatch => {
    const res = await Axios.get("/api/getTeamData");
    dispatch({
        type: GET_TEAM_DATA,
        payload: res
    });
}

export const sendNewTeamData = (teamData) => async dispatch => {
    const res = await Axios.post("/api/addNewTeam",teamData);
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