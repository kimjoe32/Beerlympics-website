import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import teamDataReducer from './teamDataReducer';
import getEventsReducer from './getEventsReducer';
import selectEventReducer from './selectEventReducer';
import selectedEditTeamReducer from './selectedEditTeamReducer';

const rootReducer = combineReducers ({
    allTeamsData:  teamDataReducer,
    eventsData: getEventsReducer,
    form: reduxForm,
    selectedEvent: selectEventReducer,
    selectedEditTeam: selectedEditTeamReducer
});

export default rootReducer; 