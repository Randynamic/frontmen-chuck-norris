import {
  SET_ACTIVE_TAB
} from './app-reducer';

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  tab
});