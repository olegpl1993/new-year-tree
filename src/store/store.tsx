import React, { createContext, useReducer } from "react";
import { settingsSlice } from "./slices/settingsSlice";

interface State {
  volume: number;
}

export const StoreContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<{ type: string; payload?: number }>;
    }
  | undefined
>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(
    settingsSlice.reducer,
    settingsSlice.initialState
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
