import { Action } from "@/store/interfaces/Action";
import { State } from "@/store/interfaces/State";
import React, { createContext, useContext, useReducer } from "react";

interface StateProviderProps {
  reducer: (state: State, action: Action) => State;
  initialState: State;
  children: React.ReactNode;
}

export const StateContext = createContext<[State, React.Dispatch<any>]>([
  {} as State,
  () => null,
]);

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateProviderProps) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
