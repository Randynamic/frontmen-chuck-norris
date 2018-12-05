const initState = {
  jokes: [],
  isLoading: true
};

const jokeListReducer = (state = initState, action) => {
  switch(action.type) {

    case FETCH_INIT:
      return {
        ...state,
        jokes: [],
        isLoading: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        jokes: action.jokes,
        isLoading: false
      };

    default:
      return state;
  }
};

export const FETCH_INIT    = 'JOKE_LIST_FETCH_INIT';
export const FETCH_SUCCESS = 'JOKE_LIST_FETCH_SUCCESS';

export default jokeListReducer;