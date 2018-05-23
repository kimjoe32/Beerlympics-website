import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import teamDataReducer from './teamDataReducer';
import getEventsReducer from './getEventsReducer';
import selectEventReducer from './selectEventReducer';

const rootReducer = combineReducers ({
    allTeamsData:  teamDataReducer,
    eventsData: getEventsReducer,
    form: reduxForm,
    selectedEvent: selectEventReducer
});

export default rootReducer; 