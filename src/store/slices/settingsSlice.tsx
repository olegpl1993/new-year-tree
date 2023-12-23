export interface SettingsState {
  volume: number;
  treeSize: number;
}

export const settingsSlice = {
  initialState: {
    volume: 50,
    treeSize: 50,
  },
  reducer: (
    state: {
      treeSize: number;
      volume: number;
    },
    action: { type: string; payload?: number }
  ) => {
    const actions: Record<string, () => SettingsState> = {
      SET_VOLUME: () => ({
        ...state,
        volume: action.payload !== undefined ? action.payload : state.volume,
      }),

      SET_TREE_SIZE: () => ({
        ...state,
        treeSize:
          action.payload !== undefined ? action.payload : state.treeSize,
      }),
    };

    return actions[action.type]?.() || state;
  },
};
