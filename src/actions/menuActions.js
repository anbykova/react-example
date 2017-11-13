import * as types from './actionTypes';

export function openMenu() {
  return {
    type: types.MENU_OPEN,
  };
}

export function closeMenu() {
  return {
    type: types.MENU_CLOSE,
  };
}

export function changeSection(section) {
  return {
    type: types.MENU_CHOOSE_SECTION,
    section
  };
}