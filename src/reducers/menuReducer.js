import { MENU_OPEN, MENU_CLOSE, MENU_CHOOSE_SECTION } from '../actions/actionTypes';

const menu = (state = { isMenuOpen: false, section: '' }, action) => {
  switch (action.type) {
    case MENU_OPEN:
      return Object.assign({}, state, { isMenuOpen: true });
    case MENU_CLOSE:
      return Object.assign({}, state, { isMenuOpen: true });
    case MENU_CHOOSE_SECTION:
      return Object.assign({}, state, { section: action.payload });
    default:
      return state;
  }
};

export default menu;