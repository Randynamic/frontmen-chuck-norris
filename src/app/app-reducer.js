const initState = {
  activeTab: 'joke-list'
};

const appReducer = (state = initState, action) => {
  switch(action.type) {

    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.tab
      };

    default:
      return state;
  }
};

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export default appReducer;