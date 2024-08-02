export interface SettingsState {
  volume: number;
  treeSize: number;
  light: number;
}

export const settingsSlice = {
  initialState: {
    volume: 50,
    treeSize: 50,
    light: 50,
  },
  reducer: (
    state: SettingsState,
    action: { type: string; payload?: number | string }
  ) => {
    const actions: Record<string, () => SettingsState> = {
      SET_VOLUME: () => ({
        ...state,
        volume:
          action.payload !== undefined && typeof action.payload === "number"
            ? action.payload
            : state.volume,
      }),

      SET_TREE_SIZE: () => ({
        ...state,
        treeSize:
          action.payload !== undefined && typeof action.payload === "number"
            ? action.payload
            : state.treeSize,
      }),

      SET_LIGHT: () => ({
        ...state,
        light:
          action.payload !== undefined && typeof action.payload === "number"
            ? action.payload
            : state.light,
      }),
    };

    return actions[action.type]?.() || state;
  },
};
