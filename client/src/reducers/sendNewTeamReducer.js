import { SEND_NEW_TEAM_DATA } from '../actions/types';

export default function (state = [], action) {
    console.log('sendnewteamreducer');
    switch (action.type) {
        case SEND_NEW_TEAM_DATA:
            //return team data
            return action.payload.data;
        default:
            //no team found
            return state; 
    }
}