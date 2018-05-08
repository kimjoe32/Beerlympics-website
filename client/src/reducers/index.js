import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import teamDataReducer from './teamDataReducer';

const rootReducer = combineReducers ({
    allTeamsData:  teamDataReducer,
    form: reduxForm
});

export default rootReducer; 