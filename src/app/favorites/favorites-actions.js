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

const updateLocalStorage = (favorites) => {
  const stringified = JSON.stringify(favorites);
  localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
};