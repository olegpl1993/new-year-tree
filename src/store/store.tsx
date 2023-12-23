import React, { createContext, useReducer } from "react";
import { SettingsState, settingsSlice } from "./slices/settingsSlice";

export const StoreContext = createContext<
  | {
      state: {
        settings: SettingsState;
      };
      dispatch: {
        settings: React.Dispatch<{ type: string; payload?: number }>;
      };
    }
  | undefined
>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, dispatchSettings] = useReducer(
    settingsSlice.reducer,
    settingsSlice.initialState
  );

  return (
    <StoreContext.Provider
      value={{
        state: {
          settings,
        },
        dispatch: {
          settings: dispatchSettings,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
