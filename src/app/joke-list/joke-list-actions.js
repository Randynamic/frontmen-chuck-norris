import axios from 'axios';
import {decodeHtml} from 'utils/utils';

import {
  FETCH_INIT,
  FETCH_SUCCESS
} from './joke-list-reducer';

export const fetchJokes = () => {
  return dispatch => {
    dispatch({ type: FETCH_INIT });

    axios.get(' http://api.icndb.com/jokes/random/10')
      .then(response => {
        const jokes = response.data.value.map(joke => ({
          id   : joke.id,
          text : decodeHtml(joke.joke)
        }));
        dispatch({ type: FETCH_SUCCESS, jokes });
      })
      .catch(error => {
        // @todo error handling
        console.log(error);
      })
  };
};