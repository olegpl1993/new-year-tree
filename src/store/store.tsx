import React, { createContext, useReducer } from "react";
import { SettingsState, settingsSlice } from "./slices/settingsSlice";
import { ItemsPayload, ItemsState, itemsSlice } from "./slices/itemsSlice";
import { GameState, gameSlice } from "./slices/gameSlice";

export const StoreContext = createContext<
  | {
      state: {
        settings: SettingsState;
        items: ItemsState;
        game: GameState;
      };
      dispatch: {
        settings: React.Dispatch<{ type: string; payload?: number }>;
        items: React.Dispatch<{ type: string; payload?: ItemsPayload }>;
        game: React.Dispatch<{ type: string; payload?: boolean }>;
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

  const [game, dispatchGame] = useReducer(
    gameSlice.reducer,
    gameSlice.initialState
  );

  return (
    <StoreContext.Provider
      value={{
        state: {
          settings,
          items,
          game,
        },
        dispatch: {
          settings: dispatchSettings,
          items: dispatchItems,
          game: dispatchGame,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
