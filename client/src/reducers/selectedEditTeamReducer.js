import { SELECTED_EDIT_TEAM } from '../actions/types';
export default function(state = '', action) {
	switch(action.type) {
		case SELECTED_EDIT_TEAM:
			return action.payload;
		default:
			return state;
	}
}