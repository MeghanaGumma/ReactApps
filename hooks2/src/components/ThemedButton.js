import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="themed-button">
      <button onClick={toggleTheme} className={theme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemedButton;
