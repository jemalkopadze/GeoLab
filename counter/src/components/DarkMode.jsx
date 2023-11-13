import { createContext, useState } from "react";
import Switch from "react-switch";
import { Counter } from "./Counter";

export const ThemeContext = createContext(null);

export const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="switch">
          <label className="">{theme === 'light' ? 'Light Mode ' : 'Dark Mode '}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Counter />
      </div>
    </ThemeContext.Provider>
  );
};
