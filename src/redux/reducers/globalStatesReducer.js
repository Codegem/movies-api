import * as type from "../action-types/globalActionTypes";

const initialState = {
  menuOpen: false,
  searchOpen: false,
  modalOpen: false,
  loading: false,
  activeData: {},
};

export const GlobalStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.MENU_TOGGLE: {
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    }
    case type.SEARCH_TOGGLE: {
      return {
        ...state,
        searchOpen: !state.searchOpen,
      };
    }
    case type.MODAL_TOGGLE: {
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    }
    case type.LOADING: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case type.ACTIVE_DATA: {
      return {
        ...state,
        activeData: action.payload,
      };
    }
    default:
      return state;
  }
};
