export interface GameState {
  isWin: boolean;
}

export const gameSlice = {
  initialState: {
    isWin: false,
  },
  reducer: (state: GameState, action: { type: string; payload?: boolean }) => {
    const actions: Record<string, () => GameState> = {
      SET_IS_WIN: () => {
        return {
          ...state,
          isWin: action.payload !== undefined ? action.payload : state.isWin,
        };
      },
    };

    return actions[action.type]?.() || state;
  },
};
