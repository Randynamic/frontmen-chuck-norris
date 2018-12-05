import jokes from './app/joke-list/joke-list-reducer';
import favorites from './app/favorites/favorites-reducer';
import app from './app/app-reducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
  app,
  jokes,
  favorites
});

export default reducers;