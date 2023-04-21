interface SetSearchAction {
  type: "SET_SEARCH";
  payload: string;
}

interface SetSearchUrlAction {
  type: "SET_SEARCH_URL";
  payload: string;
}

interface SetViewHomeAction {
  type: "SET_VIEW_HOME";
  payload: string;
}

export type Action = SetSearchAction | SetSearchUrlAction | SetViewHomeAction;
