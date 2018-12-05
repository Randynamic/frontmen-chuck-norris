const initState = {
  favorites: [],
  isAdding: false,
  timer: 0
};

const favoritesReducer = (state = initState, action) => {
  switch(action.type) {

    case ADD_MANY:
      return {
        ...state,
        favorites: action.favorites
      };

    case ADD_ONE:
      const exists = state.favorites.find(favorite => favorite.id === action.favorite.id);
      if (exists) return state;
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.favorite
        ]
      };

    case REMOVE_ONE:
      return {
        ...state,
        favorites: state.favorites.filter(favorite =>
          favorite.id !== action.id
        )
      }

    case UPDATE_TIMER:
      return {
        ...state,
        timer: action.seconds
      };

    case INIT_RANDOM_ADDING:
      return {
        ...state,
        isAdding: true
      };

    case CANCEL_RANDOM_ADDING: {
      return {
        ...state,
        isAdding: false,
        timer: 0
      };
    }

    default:
      return state;
  }
};

export const ADD_MANY             = 'FAVORITES_ADD_MANY';
export const ADD_ONE              = 'FAVORITES_ADD_ONE';
export const REMOVE_ONE           = 'FAVORITES_REMOVE_ONE';
export const UPDATE_TIMER         = 'FAVORITES_UPDATE_TIMER';
export const INIT_RANDOM_ADDING   = 'FAVORITES_INIT_RANDOM_ADDING';
export const CANCEL_RANDOM_ADDING = 'FAVORITES_CANCEL_RANDOM_ADDING';

export default favoritesReducer;