const initState = [];

const favoritesReducer = (state = initState, action) => {
  switch(action.type) {

    case ADD_MANY:
      return action.favorites

    case ADD_ONE:
      const exists = state.find(favorite => favorite.id === action.favorite.id);
      if (exists) return state;
      return [
        ...state,
        action.favorite
      ];

    case REMOVE_ONE:
      return state.filter(favorite =>
        favorite.id !== action.id
      );

    default:
      return state;
  }
};

export const ADD_MANY   = 'FAVORITES_ADD_MANY';
export const ADD_ONE    = 'FAVORITES_ADD_ONE';
export const REMOVE_ONE = 'FAVORITES_REMOVE_ONE';

export default favoritesReducer;