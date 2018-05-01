/* 
    Call some action
    import * OR { SOME_ACTION } from '../actions/types';

    Decide what to do based on the actions
    export default function(state = [], action) {
        switch(action.type){
            case SOME_ACTION:
                return _;
            case ...

            default:
                return state;
        }
    }
*/

import { GET_TEAM_DATA } from '../actions/types';
export default function (state = [], action) {
    switch (action.type) {
        case GET_TEAM_DATA:
            //return team data
            return action.payload.data;
        default:
            //no team found
            return state; 
    }
}