import { GET_TEAM_DATA, SEND_NEW_TEAM_DATA } from './types';
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