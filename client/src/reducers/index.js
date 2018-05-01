import { combineReducers } from 'redux';
/*
    Get all the reducers that will be combined:
    import usersReducer from './users_reducer';

    Combine the Reducers into 1 reducer.
    export default combineReducers({
        someState: someStateReducer,
        ...
    });
    Note that this will call all child reducers to combine into 1 state
    Each reducer will control independent parts of state
*/
import teamDataReducer from './teamDataReducer';

const rootReducer = combineReducers ({
    allTeamsData:  teamDataReducer
});

export default rootReducer; 