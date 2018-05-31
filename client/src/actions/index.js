import { GET_TEAM_DATA, 
    SEND_NEW_TEAM_DATA, 
    GET_EVENTS, 
    SELECT_EVENT,
    START_GAME,
    SELECTED_EDIT_TEAM,
    DELETE_TEAM } from './types';
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

export const selectTeam = (team) => {
    return {
        type: SELECTED_EDIT_TEAM,
        payload: team
    };
}

export const deleteTeam = (teamName) => async dispatch => {
    console.log('deleting team', teamName);
    const res = await Axios.post("/api/deleteTeam", {teamName});
    dispatch({
        type:DELETE_TEAM,
        payload:res
    });
}