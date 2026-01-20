export type AppState = {
  isDark: boolean;
  fSize: number;
};

export type AppAction =
  | { type: "TOGGLE_DARK" }
  | { type: "INCREASE_FONT" }
  | { type: "DECREASE_FONT" }
  | { type: "RESET_FONT" };

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "TOGGLE_DARK":
      return { ...state, isDark: !state.isDark };

    case "INCREASE_FONT":
      return { ...state, fSize: state.fSize + 1 };

    case "DECREASE_FONT":
      return { ...state, fSize: state.fSize - 1 };

    case "RESET_FONT":
      return { ...state, fSize: 16 };

    default:
      return state;
  }
};
