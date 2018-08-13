import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {news} from './news';

const index = combineReducers({form: formReducer, news});

export default index;
