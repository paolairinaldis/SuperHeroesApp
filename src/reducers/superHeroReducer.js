import {combineReducers} from 'redux';
import { RECEIVE_SUPERHEROES, SET_SELECT_SUPERHERO, RESET_STORE } from '../actions/superHeroActions';


const superHeroReducer = (state = [], action) => {
    switch (action.type) {
        
        case RECEIVE_SUPERHEROES:
            return {
                ...state,
                superheroes: action.superheroes
            };
        case RESET_STORE:
        return [];
        default:
            return state;
    }
};

const selectSuperHeroReducer = (state = [], action) => {
	switch (action.type) {
    case SET_SELECT_SUPERHERO:
        return {
            ...state,
            superhero: action.superhero
        };
	default:
		return state;
	}
};

const rootReducer = combineReducers({superHeroReducer, selectSuperHeroReducer});
export default rootReducer;