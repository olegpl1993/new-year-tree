import React, { createContext, useReducer } from "react";
import { SettingsState, settingsSlice } from "./slices/settingsSlice";
import { ItemsPayload, ItemsState, itemsSlice } from "./slices/itemsSlice";

export const StoreContext = createContext<
  | {
      state: {
        settings: SettingsState;
        items: ItemsState;
      };
      dispatch: {
        settings: React.Dispatch<{ type: string; payload?: number }>;
        items: React.Dispatch<{ type: string; payload?: ItemsPayload }>;
      };
    }
  | undefined
>(undefined);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, dispatchSettings] = useReducer(
    settingsSlice.reducer,
    settingsSlice.initialState
  );

  const [items, dispatchItems] = useReducer(
    itemsSlice.reducer,
    itemsSlice.initialState
  );

  return (
    <StoreContext.Provider
      value={{
        state: {
          settings,
          items,
        },
        dispatch: {
          settings: dispatchSettings,
          items: dispatchItems,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
