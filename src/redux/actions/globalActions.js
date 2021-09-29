import * as type from "../action-types/globalActionTypes";

export const MenuToggle = (dispatch) => {
  dispatch({
    type: type.MENU_TOGGLE,
  });
};

export const SearchToggle = (dispatch) => {
  dispatch({
    type: type.SEARCH_TOGGLE,
  });
};

export const ModalToggle = (dispatch) => {
  dispatch({
    type: type.MODAL_TOGGLE,
  });
};

export const Loading = (dispatch) => {
  dispatch({
    type: type.LOADING,
  });
};

export const ActiveData = (data) => async (dispatch) => {
  const setData = await data;
  dispatch({
    type: type.ACTIVE_DATA,
    payload: setData,
  });
};
