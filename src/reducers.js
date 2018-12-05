import jokes from './app/joke-list/joke-list-reducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
  jokes
});

export default reducers;