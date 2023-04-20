// import { UserData } from "../interfaces/user";

interface InitState {
  search: null
  services: any[]
  details: any
}

export const initialState: InitState = {
  search: null,
  services: [],
  details: {},
};

export const actionTypes = {
  SET_SEARCH: "SET_SEARCH",
  SET_SERVICES: "SET_SERVICES",
  SET_SERVICE_DETAILS: "SET_SERVICE_DETAILS",
};

const reducer = (state: any, action: { type: any; search: any; services: any; details: any; }) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case actionTypes.SET_SERVICES:
      return {
        ...state,
        services: action.services
      }
    case actionTypes.SET_SERVICE_DETAILS:
      return {
        ...state,
        details: action.details
      }
    default:
      return state;
  }
};

export default reducer;