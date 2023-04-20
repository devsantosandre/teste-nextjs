// import { UserData } from "../interfaces/user";

interface InitState {
  search: null;
  searchUrl: null;
  viewHome: "grid" | "list";
}

export const initialState: InitState = {
  search: null,
  searchUrl: null,
  viewHome: "grid",
};

export const actionTypes = {
  SET_SEARCH: "SET_SEARCH",
  SET_VIEW_HOME: "SET_VIEW_HOME",
  SET_SEARCH_URL: "SET_SEARCH_URL",
};

const reducer = (
  state: any,
  action: { type: string; search: string; searchUrl: string; viewHome: string }
) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case actionTypes.SET_SEARCH_URL:
      return {
        ...state,
        searchUrl: action.searchUrl,
      };
    case actionTypes.SET_VIEW_HOME:
      return {
        ...state,
        viewHome: action.viewHome,
      };

    default:
      return state;
  }
};

export default reducer;
