import { useReducer } from "react";
import { appReducer, type AppState } from "./reducers/appReducer";

const initialState: AppState = {
  isDark: false,
  fSize: 16,
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const containerStyle: React.CSSProperties = {
    backgroundColor: state.isDark ? "#1a1a1a" : "#f5f5f5",
    color: state.isDark ? "#ffffff" : "#000000",
    fontSize: `${state.fSize}px`,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h1>useReducer Exercise</h1>
      <p>Current Font Size: {state.fSize}px</p>
      <p>Dark Mode is {state.isDark ? "ON" : "OFF"}</p>

      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
          Toggle Dark Mode
        </button>

        <button onClick={() => dispatch({ type: "INCREASE_FONT" })}>
          Increase (+)
        </button>

        <button onClick={() => dispatch({ type: "DECREASE_FONT" })}>
          Decrease (-)
        </button>

        <button onClick={() => dispatch({ type: "RESET_FONT" })}>
          Reset to 16px
        </button>
      </div>
    </div>
  );
};

export default App;
