import {createStore, combineReducers} from 'redux';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotion';

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            pormotions:Promotions,
        })
    );

    return store;
}