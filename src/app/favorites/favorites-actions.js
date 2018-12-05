import axios from 'axios';
import {decodeHtml, sleep} from 'utils/utils';

import {
 ADD_MANY,
 ADD_ONE,
 REMOVE_ONE
} from './favorites-reducer';

const LOCAL_STORAGE_KEY = 'favoriteChuckNorrisJokes';

export const fetchFavorites = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY) || '[]';
  let favorites;

  try {
    favorites = JSON.parse(data);
  } catch(e) {
    favorites = [];
    updateLocalStorage(favorites);
  }

  return {
    type: ADD_MANY,
    favorites
  };
};

export const addFavorite = (favorite) => {
  return (dispatch, getState) => {
    dispatch({ type: ADD_ONE, favorite });
    updateLocalStorage(getState().favorites);
  }
};

export const removeFavorite = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_ONE, id });
    updateLocalStorage(getState().favorites);
  }
};

export const addRandomFavorites = () => {
  return async (dispatch, getState) => {
    let count = getState().favorites.length;
    if (count >= 10) return;
    
    do {
      await axios.get('http://api.icndb.com/jokes/random/1')
        .then(async response => {
          const data = response.data.value[0];
          dispatch(addFavorite({
            id   : data.id,
            text : decodeHtml(data.joke)
          }));
          count = getState().favorites.length;
        })
        .catch(error => {
          // @todo error handling
          console.log(error);
        })
        await sleep(5000);
    } while (count < 10);
  };
};

const updateLocalStorage = (favorites) => {
  const stringified = JSON.stringify(favorites);
  localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
};