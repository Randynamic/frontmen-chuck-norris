import axios from 'axios';
import {decodeHtml, sleep} from 'utils/utils';

import {
 ADD_MANY,
 ADD_ONE,
 REMOVE_ONE,
 UPDATE_TIMER,
 INIT_RANDOM_ADDING,
 CANCEL_RANDOM_ADDING
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
    updateLocalStorage(getState().favorites.favorites);
  }
};

export const removeFavorite = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: REMOVE_ONE, id });
    updateLocalStorage(getState().favorites.favorites);
  }
};

export const addRandomFavorites = () => {
  return async (dispatch, getState) => {
    let count = getState().favorites.favorites.length;
    if (count >= 10) return;

    dispatch({ type: INIT_RANDOM_ADDING });
    
    do {
      // Fetch one joke
      await axios.get('http://api.icndb.com/jokes/random/1')
        .then(async response => {
          // If adding was cancelled, do not add new favorite
          if (!getState().favorites.isAdding) {
            return;
          }

          const data = response.data.value[0];
          dispatch(addFavorite({
            id   : data.id,
            text : decodeHtml(data.joke)
          }));
          count = getState().favorites.favorites.length;
        })
        .catch(error => {
          console.error(error);
          alert("Couldn't add random favorite. Please try again later.");
        });

        // If count 10 or higher, do not initiate timer
        if (count >= 10) break;

        // If adding was cancelled, stop loop
        if (!getState().favorites.isAdding) break;

        // Initiate timer
        await new Promise(async resolve => {
          let seconds = 5;
          dispatch({ type: UPDATE_TIMER, seconds });
          
          do {
            await new Promise(resolve => setTimeout(resolve, 1000));
            seconds --;

            // If adding was cancelled, stop updating timer
            if (!getState().favorites.isAdding) break;

            dispatch({ type: UPDATE_TIMER, seconds });
          } while(seconds > 0);

          // Finalize timer
          resolve();
        });
    } while (count < 10);
    dispatch(stopAddingRandomFavorites());
  };
};

export const stopAddingRandomFavorites = () => ({
  type: CANCEL_RANDOM_ADDING
});

const updateLocalStorage = (favorites) => {
  const stringified = JSON.stringify(favorites);
  localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
};