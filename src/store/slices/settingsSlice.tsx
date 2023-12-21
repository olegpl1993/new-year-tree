export const settingsSlice = {
  initialState: {
    volume: 100,
  },
  reducer: (
    state: { volume: number },
    action: { type: string; payload?: number }
  ) => {
    const actions: Record<string, () => { volume: number }> = {
      SET_VOLUME: () => ({
        ...state,
        volume: action.payload !== undefined ? action.payload : state.volume,
      }),
    };

    return actions[action.type]?.() || state;
  },
};
