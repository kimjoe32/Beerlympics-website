import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import teamDataReducer from './teamDataReducer';
import getEventsReducer from './getEventsReducer';
const rootReducer = combineReducers ({
    allTeamsData:  teamDataReducer,
    eventsData: getEventsReducer,
    form: reduxForm
});

export default rootReducer; 